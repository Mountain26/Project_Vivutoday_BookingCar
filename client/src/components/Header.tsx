import styles from "../styles/Header.module.css";
import logo from "../assets/img/logoxin.png";

function Header() {
  return (
    <header>
      <div className={styles.background}>
        <div className={styles["top-bar"]}>
          <div>
            <i
              className="fa-solid fa-bus-simple"
              style={{ color: "#ffffff" }}
            ></i>{" "}
            Hệ thống Đặt vé Xe Toàn Quốc
          </div>
          <div className={styles.contact}>
            <i
              className="fa-solid fa-envelope"
              style={{ color: "#ffffff" }}
            ></i>{" "}
            info.vivutoday@gmail.com |{" "}
            <i className="fa-solid fa-phone" style={{ color: "#ffffff" }}></i>{" "}
            1900 0152
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div style={{ width: "20%" }}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <label htmlFor="menu-toggle" className={styles["hamburger-menu"]}>
          <i className="fa-solid fa-bars"></i>
        </label>
        <div className={styles["nav-links"]}>
          <ul>
            <li className={styles["this-page"]}>TRANG CHỦ</li>
            <li>GIỚI THIỆU</li>
            <li>THÔNG TIN NHÀ XE</li>
            <li>BẾN XE</li>
            <li>TUYẾN ĐƯỜNG</li>
            <li>KIỂM TRA VÉ</li>
          </ul>
          <div
            className={`${styles["search-icon"]} ${styles["mobile-search"]}`}
          >
            <a href="">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
          </div>
        </div>
        <div style={{ width: "15%" }}>
          <div
            className={`${styles["search-icon"]} ${styles["desktop-search"]}`}
          >
            <a href="">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
