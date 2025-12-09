import styles from "../styles/Footer.module.css";
import DMCA from "../assets/img/dmca_protected_15_120.png";
import HandleCert from "../assets/img/handle_cert.png";
import BCTLogo from "../assets/img/BCT-LOGO.webp.png";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-section"]}>
        <div className={`${styles["footer-column"]} ${styles.news}`}>
          <h4>Tin tức</h4>
          <ul>
            <li>Xe Limousine - Đẳng cấp hạng thương gia thời đại mới</li>
            <li>
              Tổng quan các bến xe Vũng Tàu - Giới thiệu thông tin lịch trình
              nhà xe
            </li>
            <li>Top 31 nhà xe limousine, xe giường nằm đi Đà Lạt</li>
          </ul>
        </div>
        <div className={`${styles["footer-column"]} ${styles.routes}`}>
          <h4>Tuyến đường</h4>
          <ul>
            <li>Xe đi Buôn Mê Thuột từ Sài Gòn</li>
            <li>Xe đi Vũng Tàu từ Sài Gòn</li>
            <li>Xe đi Nha Trang từ Sài Gòn</li>
            <li>Xe đi Đà Lạt từ Sài Gòn</li>
            <li>Xe đi Sapa từ Hà Nội</li>
            <li>Xe đi Hải Phòng từ Hà Nội</li>
            <li>Xe đi Vinh từ Hà Nội</li>
          </ul>
        </div>
        <div className={`${styles["footer-column"]} ${styles.limousine}`}>
          <h4>Xe Limousine</h4>
          <ul>
            <li>Xe Limousine đi Đà Lạt từ Sài Gòn</li>
            <li>Xe Limousine đi Vũng Tàu từ Sài Gòn</li>
            <li>Xe Limousine đi Nha Trang từ Sài Gòn</li>
            <li>Xe Limousine đi Hải Phòng từ Hà Nội</li>
            <li>Xe Limousine đi Hạ Long từ Hà Nội</li>
            <li>Xe Limousine đi Sapa Từ Hà Nội</li>
            <li>Xe Limousine đi Quảng Ninh từ Hà Nội</li>
          </ul>
        </div>
      </div>

      {/* Second row: Bến xe, Nhà xe, two list columns */}
      <div className={styles["footer-section"]}>
        <div className={styles["footer-column"]}>
          <h4>Bến xe</h4>
          <ul>
            <li>Bến xe Miền Đông</li>
            <li>Bến xe Trung tâm Đà Nẵng</li>
            <li>Bến xe Gia Lâm</li>
            <li>Bến xe Mỹ Đình</li>
            <li>Bến xe An Sương</li>
            <li>Bến xe Nước Ngầm</li>
            <li>Bến xe Miền Tây</li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <h4>Nhà xe</h4>
          <ul>
            <li>Xe Sao Việt</li>
            <li>Xe Hoa Mai</li>
            <li>Xe Hạ Long Travel</li>
            <li>Xe Quốc Đạt</li>
            <li>Xe Thanh Bình Xanh</li>
            <li>Xe Thiện Thành limousine</li>
            <li>Xe Hồng Sơn Phú Yên</li>
            <li>Xe Tiến Oanh</li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <ul>
            <li>Xe Hải Âu</li>
            <li>Xe Chí Nghĩa</li>
            <li>Xe Hưng Long</li>
            <li>Xe Kim Mạnh Hùng</li>
            <li>Xe Tuấn Hưng</li>
            <li>Xe Khanh Phong</li>
            <li>Xe An Anh (Quê Hương)</li>
            <li>Xe Minh Quốc</li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <ul>
            <li>Xe Văn Minh</li>
            <li>Xe Anh Tuyên</li>
            <li>Xe Điền Linh</li>
            <li>Xe Hạnh Cafe</li>
            <li>Xe Tuấn Nga</li>
            <li>Xe Ngọc Ánh Sài Gòn</li>
            <li>Xe Hùng Cường</li>
            <li>Xe Thuận Tiến</li>
          </ul>
        </div>
      </div>
      <div className={styles["footer-section"]}>
        <div className={styles["footer-column"]}>
          <h4>Về Chúng Tôi</h4>
          <ul>
            <li>Giới Thiệu Vivutoday</li>
            <li>Liên Hệ</li>
            <li>Giá trị cốt lõi</li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <h4>Hỗ Trợ</h4>
          <ul>
            <li>Chính sách bảo mật</li>
            <li>Chính sách điều khoản và giao dịch chung</li>
            <li>Chính sách đổi trả và hoàn tiền</li>
            <li>Chính sách thanh toán</li>
            <li>Quy chế hoạt động</li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <h4>Liên hệ</h4>
          <ul>
            <li style={{ color: "black" }}>
              Hotline: <b>1900 0152</b>
            </li>
            <li>(Cước phí: 3.000 đồng/phút)</li>
            <li style={{ color: "black" }}>
              Hotline: <b>1900.996.678</b>
            </li>
            <li>(Cước phí: 1.000 đồng/phút)</li>
            <li style={{ color: "black" }}>
              Hotline: <b>1900.0179</b>
            </li>
            <li>Cước phí: 8000đ/phút (dịch Vụ đặt vé nhanh 24/7)</li>
          </ul>
        </div>
        <div className={`${styles["footer-column"]} ${styles.certifications}`}>
          <h4>Chứng nhận</h4>
          <ul>
            <li>
              <img src={DMCA} alt="DMCA" />
            </li>
            <li>
              <img src={HandleCert} alt="Handle Cert" />
            </li>
            <li>
              <img src={BCTLogo} alt="BCT" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
