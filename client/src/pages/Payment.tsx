import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../styles/Payment.module.css";

 type SeatType = "normal" | "vip";

type SeatInfo = {
  id: string;
  label: string;
  floor: 1 | 2;
  type: SeatType;
};

type TripInfo = {
  route: string;
  time: string;
  busPlate: string;
};

type PassengerInfo = {
  phone: string;
  fullName: string;
  email?: string;
  pickUpStation: string;
  dropOffStation: string;
};

type PaymentInfo = {
  provider: string;
  status: string;
  qrCodeUrl: string;
};

type LocationState = {
  tripInfo: TripInfo;
  selectedSeats: SeatInfo[];
  totalAmount: number;
  passengerInfo: PassengerInfo;
  payment: PaymentInfo;
};

const formatCurrency = (value: number) =>
  value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  });

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | undefined;

  const seats = state?.selectedSeats ?? [];
  const amount = state?.totalAmount ?? 0;

  const handleConfirm = () => {
    Swal.fire({
      icon: "success",
      title: "Cảm ơn bạn",
      text: "Chúng tôi sẽ kiểm tra trạng thái thanh toán ngay khi có thể.",
      confirmButtonText: "Đóng",
    });
  };

  const handleBack = () => {
    navigate("/seat-selection");
  };

  if (!state) {
    return (
      <div className={styles.missingState}>
        <div className={styles.missingCard}>
          <h2>Chưa có thông tin thanh toán</h2>
          <p>Vui lòng chọn ghế và nhập thông tin khách hàng trước khi tới bước thanh toán.</p>
          <button type="button" onClick={handleBack}>
            Quay lại chọn ghế
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <section className={styles.infoCard}>
          <header>
            <h1>Thông tin chuyến</h1>
            <p>{state.tripInfo.route}</p>
          </header>
          <div className={styles.tripDetails}>
            <p><strong>Thời gian:</strong> {state.tripInfo.time}</p>
            <p><strong>Biển số:</strong> {state.tripInfo.busPlate}</p>
            <p><strong>Điểm đón:</strong> {state.passengerInfo.pickUpStation}</p>
            <p><strong>Điểm trả:</strong> {state.passengerInfo.dropOffStation}</p>
          </div>
        </section>

        <section className={styles.infoCard}>
          <header>
            <h2>Ghế đã chọn</h2>
            <span>{seats.length} ghế</span>
          </header>
          {seats.length ? (
            <ul className={styles.seatList}>
              {seats.map((seat) => (
                <li key={seat.id}>
                  <span>{seat.label}</span>
                  <span className={styles.seatTag}>{seat.type === "vip" ? "VIP" : "Thường"}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Chưa chọn ghế.</p>
          )}
        </section>

        <section className={styles.infoCard}>
          <header>
            <h2>Tổng tiền</h2>
          </header>
          <div className={styles.amount}>{formatCurrency(amount)}</div>
        </section>
      </div>

      <div className={styles.rightColumn}>
        <section className={styles.paymentCard}>
          <header>
            <h2>Quét mã QR để thanh toán</h2>
            <p>Nhà cung cấp: {state.payment.provider}</p>
          </header>
          <img
            src={state.payment.qrCodeUrl}
            alt={`QR ${state.payment.provider}`}
            className={styles.qrImage}
          />
          <div className={styles.statusBox}>
            <span>Trạng thái</span>
            <strong>{state.payment.status}</strong>
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles.confirmButton} onClick={handleConfirm}>
              Tôi đã thanh toán
            </button>
            <button type="button" className={styles.backButton} onClick={handleBack}>
              Quay lại chọn ghế
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
