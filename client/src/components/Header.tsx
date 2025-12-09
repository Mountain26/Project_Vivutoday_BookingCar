import styles from "../styles/Header.module.css";
import logo from "../assets/img/logoxin.png";

function Header() {
  return (
    <header>
      <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
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
        <div style={{ width: "10%" }}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <label htmlFor="menu-toggle" className={styles["hamburger-menu"]}>
          <i className="fa-solid fa-bars" style={{ color: "#1190D4" }}></i>
        </label>

        <div className={styles.navWrapper}>
          <label htmlFor="menu-toggle" className={styles.overlay}></label>
          <div className={styles["nav-links"]}>
            <div className={styles.mobileHeader}>
              <input
                type="text"
                placeholder="Tìm kiếm"
                className={styles.mobileSearch}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#FFA901" }}
              ></i>
            </div>
            <ul>
              <li className={styles["this-page"]}>
                <label htmlFor="menu-toggle">TRANG CHỦ</label>
              </li>
              <li>
                <label htmlFor="menu-toggle">GIỚI THIỆU</label>
              </li>
              <li>
                <label htmlFor="menu-toggle">THÔNG TIN NHÀ XE</label>
              </li>
              <li>
                <label htmlFor="menu-toggle">BẾN XE</label>
              </li>
              <li>
                <label htmlFor="menu-toggle">TUYẾN ĐƯỜNG</label>
              </li>
              <li>
                <label htmlFor="menu-toggle">KIỂM TRA VÉ</label>
              </li>
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
