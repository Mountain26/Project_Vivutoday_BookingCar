import { useState } from "react";
import styles from "../styles/Ticket.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import banner from "../assets/img/vivu-phone-banner.png.png";

interface Props {}

function Ticket(props: Props) {
  const {} = props;

  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [sortTime, setSortTime] = useState<string>("Giờ đi");
  const [sortPrice, setSortPrice] = useState<string>("Mức giá");

  const trips = [
    {
      id: 1,
      name: "Vip Phương Huy Luxury",
      rating: 4.5,
      reviews: 21,
      type: "Limousine 9 chỗ",
      departTime: "21:00",
      arriveTime: "22:30",
      price: 220000,
      seatsLeft: 10,
      departStation: "Ha Noi Office - Co Linh",
      arriveStation: "Hai Phong",
      duration: "1h30'",
      dateNote: "*Thuộc chuyến 21-00 20-11-2024 Hà Nội - Hải Phòng",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_D0BJFheKtxLDNnobOuU4YZiWrGP_l72Ew&s", // ensure exists or leave blank
    },
    {
      id: 2,
      name: "Hoàng Anh Limousine (Hải Phòng)",
      rating: 4.5,
      reviews: 310,
      type: "Limousine 9 chỗ",
      departTime: "21:15",
      arriveTime: "23:50",
      price: 450000,
      seatsLeft: 10,
      departStation: "Ha Noi Office - Co Linh",
      arriveStation: "Hai Phong",
      duration: "2h35'",
      dateNote: "*Thuộc chuyến 21-15 20-11-2024 Hà Nội - Hải Phòng",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_D0BJFheKtxLDNnobOuU4YZiWrGP_l72Ew&s",
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <span>Hà Nội</span> Đến <span>Hải Phòng</span>
        </h2>
        <div className={styles.cardRow}>
          <div className={styles.card}>
            <div className={styles.cardLabel}>Điểm Khởi Hành</div>
            <select
              className={styles.cardSelect}
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="">Chọn Điểm Khởi Hành</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hải Phòng">Hải Phòng</option>
              <option value="Nam Định">Nam Định</option>
            </select>
          </div>

          <div className={styles.card}>
            <div className={styles.cardLabel}>Điểm Đến</div>
            <select
              className={styles.cardSelect}
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">Chọn Điểm Đến</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hải Phòng">Hải Phòng</option>
              <option value="Nam Định">Nam Định</option>
            </select>
          </div>

          <div className={styles.card}>
            <div className={styles.cardLabel}>Ngày Khởi Hành</div>
            <input
              className={styles.cardInput}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button className={styles.searchBtn}>
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#ffffff" }}
            ></i>
            <span>TÌM CHUYẾN XE</span>
          </button>
        </div>

        {/* Sort Header */}
        <div className={styles.resultsHeader}>
          <span className={styles.resultsNote}>Sắp xếp theo tuyến đường</span>
          <select
            className={styles.sortSelect}
            value={sortTime}
            onChange={(e) => setSortTime(e.target.value)}
          >
            <option>Giờ đi</option>
            <option>Giờ đến</option>
          </select>
          <select
            className={styles.sortSelect}
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
          >
            <option>Mức giá</option>
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
          </select>
        </div>

        {/* Filters and Results */}
        <div className={styles.resultsLayout}>
          <aside className={styles.filters}>
            <div className={styles.filterCard}>
              <div className={styles.filterTitle}>Tiêu chí phổ biến</div>
              <label className={styles.checkboxRow}>
                <input type="checkbox" /> Chuyến giảm giá (370)
              </label>
              <label className={styles.checkboxRow}>
                <input type="checkbox" /> Xe VIP Limousine (433)
              </label>

              <div className={styles.filterTitle}>Giờ đi</div>
              <input type="range" min="0" max="1439" className={styles.range} />
              <div className={styles.rangeLabels}>
                <span>00:00</span>
                <span>23:59</span>
              </div>

              <div className={styles.filterTitle}>Giá vé</div>
              <input
                type="range"
                min="0"
                max="2000000"
                className={styles.range}
              />
              <div className={styles.rangeLabels}>
                <span>0</span>
                <span>2.000.000</span>
              </div>

              <div className={styles.filterTitle}>Nhà xe</div>
              <input type="text" placeholder="" className={styles.textInput} />
              <div className={styles.checkboxList}>
                {[
                  "Anh Huy (Hải Phòng)",
                  "Anh Huy Đất Cảng",
                  "Anh Huy Travel",
                  "Bằng Phấn",
                  "Cát Bà Express",
                  "Cát Bà Go Easy Limousine",
                ].map((brand) => (
                  <label key={brand} className={styles.checkboxRow}>
                    <input type="checkbox" /> {brand}
                  </label>
                ))}
              </div>
              <button className={styles.clearBtn}>Xóa đã chọn</button>
            </div>
          </aside>

          <section className={styles.results}>
            {trips.map((trip) => (
              <div key={trip.id} className={styles.tripCard}>
                <div className={styles.ticketImage}>
                  <img
                    src={
                      trip.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_D0BJFheKtxLDNnobOuU4YZiWrGP_l72Ew&s"
                    }
                    alt={trip.name}
                    width="100"
                    height="100"
                  />
                </div>

                <div className={styles.ticketDetails}>
                  <div className={styles.ticketHeader}>
                    <h2 className={styles.ticketName}>{trip.name}</h2>
                    <div className={styles.rating}>
                      <span className={styles.starIcon}>★</span>
                      {trip.rating}
                    </div>
                    <span className={styles.reviewCount}>
                      • {trip.reviews} Đánh giá
                    </span>
                  </div>

                  <div className={styles.ticketType}>{trip.type}</div>

                  <div className={styles.journeyInfo}>
                    <div className={styles.time}>{trip.departTime}</div>
                    <div className={styles.duration}>
                      <span className={styles.durationTime}>
                        {trip.duration}
                      </span>
                      <span className={styles.arrowIcon}>⇨</span>
                    </div>
                    <div className={styles.time}>{trip.arriveTime}</div>
                  </div>

                  <div className={styles.stations}>
                    <div className={styles.station}>{trip.departStation}</div>
                    <div className={styles.divider}>-</div>
                    <div className={styles.station}>{trip.arriveStation}</div>
                  </div>

                  <div className={styles.information}>
                    <div className={styles.note}>{trip.dateNote}</div>
                    <a className={styles.infoLink}>Thông tin chi tiết</a>
                  </div>
                </div>

                <div className={styles.priceSection}>
                  <div className={styles.gia}>
                    <div className={styles.priceLabel}>
                      Từ{" "}
                      <span className={styles.price}>
                        {new Intl.NumberFormat("vi-VN").format(trip.price)}
                      </span>
                      <span className={styles.currency}> đ</span>
                    </div>
                    <div className={styles.seatsAvailable}>
                      {trip.seatsLeft} Còn trống
                    </div>
                  </div>
                  <button className={styles.bookButton}>
                    <i className="fa-solid fa-bus-simple"></i>
                    Chọn xe
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className={styles.bannerContainer}>
        <img src={banner} alt="" className={styles.bannerImage} />
      </div>
      <Footer />
    </div>
  );
}

export default Ticket;
