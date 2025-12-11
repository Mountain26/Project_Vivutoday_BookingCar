import { type FormEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SeatSelection.module.css";
import { Phone, User, Mail, MapPin } from "lucide-react";

type SeatType = "normal" | "vip";

type SeatStatus = "available" | "booked";

type Seat = {
  id: string;
  label: string;
  type: SeatType;
  status: SeatStatus;
};

const seatPrices: Record<SeatType, number> = {
  normal: 250000,
  vip: 320000,
};

const seatColumns: string[][] = [
  ["B1", "B2", "B3", "B4", "B5", "B6"],
  ["D1", "D2", "D3", "D4", "D5", "D6"],
  ["F1", "F2", "F3", "F4", "F5", "F6"],
];

const seatCatalog: Record<string, Seat> = {
  B1: { id: "B1", label: "B1", type: "normal", status: "booked" },
  B2: { id: "B2", label: "B2", type: "normal", status: "available" },
  B3: { id: "B3", label: "B3", type: "normal", status: "available" },
  B4: { id: "B4", label: "B4", type: "normal", status: "available" },
  B5: { id: "B5", label: "B5", type: "normal", status: "available" },
  B6: { id: "B6", label: "B6", type: "normal", status: "available" },
  D1: { id: "D1", label: "D1", type: "vip", status: "booked" },
  D2: { id: "D2", label: "D2", type: "vip", status: "available" },
  D3: { id: "D3", label: "D3", type: "vip", status: "available" },
  D4: { id: "D4", label: "D4", type: "vip", status: "available" },
  D5: { id: "D5", label: "D5", type: "vip", status: "available" },
  D6: { id: "D6", label: "D6", type: "vip", status: "available" },
  F1: { id: "F1", label: "F1", type: "vip", status: "available" },
  F2: { id: "F2", label: "F2", type: "vip", status: "available" },
  F3: { id: "F3", label: "F3", type: "vip", status: "available" },
  F4: { id: "F4", label: "F4", type: "vip", status: "available" },
  F5: { id: "F5", label: "F5", type: "normal", status: "available" },
  F6: { id: "F6", label: "F6", type: "normal", status: "available" },
};

const MAX_SELECTION = 4;

const pickUpStations = [
  { value: "vp_my_dinh", label: "VP Mỹ Đình" },
  { value: "ben_xe_gia_lam", label: "Bến xe Gia Lâm" },
  { value: "san_bay_noi_bai", label: "Sân bay Nội Bài" },
];

const dropOffStations = [
  { value: "ben_xe_da_nang", label: "Bến xe Đà Nẵng" },
  { value: "song_han", label: "Trung tâm Sông Hàn" },
  { value: "san_bay_da_nang", label: "Sân bay Đà Nẵng" },
];

const SeatSelection = () => {
  const navigate = useNavigate();
  const [selectedSeatIds, setSelectedSeatIds] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pickUpStation, setPickUpStation] = useState(pickUpStations[0]?.value ?? "");
  const [dropOffStation, setDropOffStation] = useState(dropOffStations[0]?.value ?? "");
  const [touchedFields, setTouchedFields] = useState<{
    phone: boolean;
    fullName: boolean;
    email: boolean;
  }>({
    phone: false,
    fullName: false,
    email: false,
  });
  const [formError, setFormError] = useState("");

  const trimmedPhone = phone.trim();
  const trimmedFullName = fullName.trim();
  const trimmedEmail = email.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const selectedSeats = useMemo(
    () =>
      selectedSeatIds
        .map((id) => seatCatalog[id])
        .filter((seat): seat is Seat => Boolean(seat))
        .sort((a, b) => a.label.localeCompare(b.label)),
    [selectedSeatIds]
  );

  const totalAmount = useMemo(
    () =>
      selectedSeats.reduce((sum, seat) => {
        return sum + seatPrices[seat.type];
      }, 0),
    [selectedSeats]
  );

  const formatCurrency = (value: number) =>
    value.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    });

  const phoneError = !trimmedPhone
    ? "Vui lòng nhập số điện thoại."
    : !/^\d+$/.test(trimmedPhone)
    ? "Số điện thoại chỉ được chứa chữ số."
    : trimmedPhone.length !== 10
    ? "Số điện thoại phải gồm 10 chữ số."
    : "";

  const fullNameError = !trimmedFullName
    ? "Vui lòng nhập họ tên."
    : trimmedFullName.length < 3
    ? "Họ và tên phải có ít nhất 3 ký tự."
    : "";

  const emailError = !trimmedEmail
    ? "Vui lòng nhập email."
    : !emailPattern.test(trimmedEmail)
    ? "Email không hợp lệ."
    : "";

  const shouldShowPhoneError = touchedFields.phone && Boolean(phoneError);
  const shouldShowFullNameError = touchedFields.fullName && Boolean(fullNameError);
  const shouldShowEmailError = touchedFields.email && Boolean(emailError);

  const handleSeatToggle = (seatId: string) => {
    const seat = seatCatalog[seatId];
    if (!seat || seat.status === "booked") {
      return;
    }

    setSelectedSeatIds((prev) => {
      const alreadySelected = prev.includes(seatId);

      if (alreadySelected) {
        const next = prev.filter((id) => id !== seatId);
        if (formError && (formError.includes("tối đa") || formError.includes("chọn ít nhất"))) {
          setFormError("");
        }
        return next;
      }

      if (prev.length >= MAX_SELECTION) {
        setFormError(`Mỗi lần đặt chỉ tối đa ${MAX_SELECTION} vé. Vui lòng bỏ bớt ghế đã chọn.`);
        return prev;
      }

      if (formError && (formError.includes("tối đa") || formError.includes("chọn ít nhất"))) {
        setFormError("");
      }

      return [...prev, seatId];
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouchedFields({ phone: true, fullName: true, email: true });

    const missingSeat = !selectedSeats.length;
    const missingFields: string[] = [];

    if (phoneError) {
      missingFields.push("số điện thoại hợp lệ");
    }

    if (fullNameError) {
      missingFields.push("họ tên hợp lệ");
    }

    if (selectedSeats.length > MAX_SELECTION) {
      setFormError(`Mỗi lần đặt chỉ tối đa ${MAX_SELECTION} vé. Vui lòng bỏ bớt ghế đã chọn.`);
      return;
    }

    if (emailError) {
      missingFields.push("email hợp lệ");
    }

    if (missingSeat || missingFields.length) {
      const text = missingSeat
        ? "Vui lòng chọn ít nhất một ghế trước khi thanh toán."
        : `Vui lòng nhập ${missingFields.join(" và ")} để tiếp tục.`;

      setFormError(text);
      return;
    }

    setFormError("");

    const sanitizedPhone = trimmedPhone;
    const sanitizedFullName = trimmedFullName;
    const sanitizedEmail = trimmedEmail;

    navigate("/payment", {
      state: {
        tripInfo: {
          route: "Hà Nội → Đà Nẵng",
          time: "22:00 • 12/12/2025",
          busPlate: "29B-123.45",
        },
        selectedSeats,
        totalAmount,
        prices: seatPrices,
        passengerInfo: {
          phone: sanitizedPhone,
          fullName: sanitizedFullName,
          email: sanitizedEmail,
          pickUpStation,
          dropOffStation,
        },
        payment: {
          provider: "MOMO",
          status: "Chờ thanh toán",
          qrCodeUrl:
            "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=ThanhToanMOMO",
        },
      },
    });
  };

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.leftPane}>
        <header className={styles.sectionHeader}>
          <h1>Chọn chỗ ngồi</h1>
          <p>Vui lòng chọn ghế cho chuyến đi của bạn.</p>
        </header>
        <div className={styles.legend}>
          <span className={`${styles.legendItem} ${styles.legendAvailable}`}>Ghế trống</span>
          <span className={`${styles.legendItem} ${styles.legendSelected}`}>Ghế đang chọn</span>
          <span className={`${styles.legendItem} ${styles.legendBooked}`}>Ghế đã đặt</span>
        </div>
        <div className={styles.seatMap}>
          <div className={styles.floorSection}>
            <div className={styles.seatLayout}>
              {seatColumns.map((column, columnIndex) => (
                <div key={`column-${columnIndex}`} className={styles.seatColumn}>
                  {column.map((seatId) => {
                    const seat = seatCatalog[seatId];

                    if (!seat) {
                      return null;
                    }

                    const isSelected = selectedSeatIds.includes(seat.id);
                    const seatStatusClass =
                      seat.status === "booked"
                        ? styles.seatBooked
                        : isSelected
                        ? styles.seatSelected
                        : styles.seatAvailable;

                    return (
                      <button
                        key={seat.id}
                        type="button"
                        className={`${styles.seatButton} ${seatStatusClass}`}
                        disabled={seat.status === "booked"}
                        onClick={() => handleSeatToggle(seat.id)}
                      >
                        <span className={styles.seatLabel}>{seat.label}</span>
                        <span className={styles.seatType}>
                          {seat.type === "vip" ? "VIP" : "Thường"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.noticeBlock}>
          <p>
            <em>
              Để được giải đáp thắc mắc về dịch vụ của công ty, quý khách vui lòng liên hệ
              <span className={styles.contactHighlight}> 1900 0152</span>
            </em>
          </p>
          <p className={styles.noticeTitle}>Lưu ý:</p>
          <p>
            <em>
              Mỗi lần đặt vé trực tuyến, quý khách được đặt
              <span className={styles.noticeStrong}> tối đa {MAX_SELECTION} vé</span>. Mong quý khách thông cảm!
            </em>
          </p>
        </div>
      </section>

      <aside className={styles.rightPane}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formHeader}>
            <h2>Thông tin khách hàng</h2>
          </div>

          <label className={styles.formControl}>
            <span>Số điện thoại</span>
            <div
              className={`${styles.inputWrapper} ${shouldShowPhoneError ? styles.inputError : ""}`}
            >
              <Phone className={styles.inputIcon} size={18} aria-hidden="true" />
              <input
                className={styles.inputField}
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                onBlur={() => setTouchedFields((prev) => ({ ...prev, phone: true }))}
                placeholder="Nhập số điện thoại"
              />
            </div>
            {shouldShowPhoneError && (
              <span className={styles.errorMessage}>{phoneError}</span>
            )}
          </label>

          <label className={styles.formControl}>
            <span>Họ và tên</span>
            <div
              className={`${styles.inputWrapper} ${shouldShowFullNameError ? styles.inputError : ""}`}
            >
              <User className={styles.inputIcon} size={18} aria-hidden="true" />
              <input
                className={styles.inputField}
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                onBlur={() => setTouchedFields((prev) => ({ ...prev, fullName: true }))}
                placeholder="Nhập họ tên"
              />
            </div>
            {shouldShowFullNameError && (
              <span className={styles.errorMessage}>{fullNameError}</span>
            )}
          </label>

          <label className={styles.formControl}>
            <span>Email</span>
            <div className={`${styles.inputWrapper} ${shouldShowEmailError ? styles.inputError : ""}`}>
              <Mail className={styles.inputIcon} size={18} aria-hidden="true" />
              <input
                className={styles.inputField}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={() => setTouchedFields((prev) => ({ ...prev, email: true }))}
                placeholder="Nhập email (nếu có)"
              />
            </div>
            {shouldShowEmailError && (
              <span className={styles.errorMessage}>{emailError}</span>
            )}
          </label>

          <label className={styles.formControl}>
            <span>Điểm đón</span>
            <div className={styles.inputWrapper}>
              <MapPin className={styles.inputIcon} size={18} aria-hidden="true" />
              <select
                className={styles.selectField}
                value={pickUpStation}
                onChange={(event) => setPickUpStation(event.target.value)}
              >
                {pickUpStations.map((station) => (
                  <option key={station.value} value={station.value}>
                    {station.label}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <label className={styles.formControl}>
            <span>Điểm trả</span>
            <div className={styles.inputWrapper}>
              <MapPin className={styles.inputIcon} size={18} aria-hidden="true" />
              <select
                className={styles.selectField}
                value={dropOffStation}
                onChange={(event) => setDropOffStation(event.target.value)}
              >
                {dropOffStations.map((station) => (
                  <option key={station.value} value={station.value}>
                    {station.label}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <div className={styles.summaryBox}>
            <h3>Ghế đã chọn</h3>
            {selectedSeats.length ? (
              <div className={styles.selectedSeatList}>
                {selectedSeats.map((seat) => (
                  <div key={seat.id} className={styles.selectedSeatCard}>
                    <span className={styles.selectedSeatLabel}>{seat.label}</span>
                    <div className={styles.selectedSeatMeta}>
                      <span>{seat.type === "vip" ? "VIP" : "Thường"}</span>
                      <span>•</span>
                      <span>{formatCurrency(seatPrices[seat.type])}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.emptySeats}>Chưa có ghế nào được chọn.</p>
            )}

            <div className={styles.totalLine}>
              <span>Tổng tiền</span>
              <strong>{formatCurrency(totalAmount)}</strong>
            </div>
          </div>

          {formError && <p className={styles.formError}>{formError}</p>}

          <button className={styles.payButton} type="submit">
            Thanh toán
          </button>
        </form>
      </aside>
    </div>
  );
};

export default SeatSelection;
