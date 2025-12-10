import styles from "../styles/Introduce.module.css";
import heroImg from "../assets/img/Image (9).png";
import logo from "../assets/img/logoxin.png";
import fbIcon from "../assets/img/7fd63a363dc9b60563c59524b3430767fe0e72d8.png";
import zaloIcon from "../assets/img/fd8b93ff1018b086cbdfd1c95fddb7dbc0606519.png";
import mascotCenter from "../assets/img/fbb546e6d246960afda6640bef5e86ebac2a73e0.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Introduce() {
    return (
        <>
            <Header />
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h1>
                            <span className={styles.orange}>Tiện lợi,</span>
                            <br />
                            <span className={styles.orange}>tận tâm,</span>
                            <br />
                            <span className={styles.blue}>an toàn.</span>
                        </h1>
                        <div className={styles.follow}>
                            <p>Theo dõi chúng tôi tại:</p>
                            <div className={styles.brands}>
                                <img src={logo} alt="Vivutoday" />
                                <img
                                    src={fbIcon}
                                    alt="Facebook"
                                    onError={(e) => (e.currentTarget.src = 'https://static.xx.fbcdn.net/rsrc.php/yc/r/5Rp2Z9QqDCM.svg')}
                                />
                                <img
                                    src={zaloIcon}
                                    alt="Zalo"
                                    onError={(e) => (e.currentTarget.src = 'https://zalo.me/static/977dd9572cdb60c709a94d6abed52104.svg')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img className={styles.image} src={heroImg} alt="Đặt vé xe" />
                    </div>
                </div>
            </section>
            {/* Section: Lý do bạn nên đặt vé tại Vivutoday.com */}

            {/* Section: Hệ thống đặt vé xe toàn quốc Vivutoday.com */}
            <section className={styles.systemSection}>
                <div className={styles.systemContainer}>
                    <header className={styles.systemHeader}>
                        <h2>
                            Hệ thống đặt vé xe toàn quốc <span className={styles.brand}>Vivutoday.com</span>
                        </h2>
                        <p>
                            Trong thời đại số hóa ngày nay, việc sử dụng công nghệ thông tin để giải quyết nhu cầu của cuộc sống trở nên
                            quen thuộc. Khi bạn cần tìm một trang web đáng tin cậy để đặt vé xe, VivuToday.com sẽ là người bạn đáng tin
                            để giúp bạn di chuyển một cách an toàn và tiện lợi.
                        </p>
                    </header>

                    <div className={styles.systemCards}>
                        <div className={styles.systemCardBlue}>
                            <p>
                                Chúng tôi <b>cam kết đảm bảo</b> cho bạn môi trường đáng tin cậy để đặt vé xe. Với việc kiểm tra độ tin cậy và sự hợp tác
                                với các đối tác uy tín, chúng tôi đảm bảo mỗi chuyến đi của bạn diễn ra <b>an toàn và suôn sẻ</b>.
                            </p>
                            <h5>An Toàn Được Đảm Bảo</h5>
                        </div>
                        <div className={styles.systemCardBlue}>
                            <p>
                                Với đội ngũ tư vấn viên chuyên nghiệp luôn sẵn sàng <b>hỗ trợ 24/7</b>, chúng tôi sẽ giúp bạn mọi lúc bạn cần. Điều này đảm bảo
                                bạn luôn có <b>một người bạn đồng hành đáng tin</b> trong mỗi hành trình.
                            </p>
                            <h5>Hỗ Trợ Tận Tâm</h5>
                        </div>
                        <div className={styles.systemCardOutline}>
                            <div className={styles.statLine}><span className={styles.statNumber}>1500+</span> <span>nhà xe</span></div>
                            <div className={styles.statLine}><span className={styles.statNumber}>5000+</span> <span>lịch trình</span></div>
                            <p>
                                Chúng tôi cung cấp nhiều sự lựa chọn để đáp ứng mọi nhu cầu của khách hàng.
                            </p>
                            <h5 className={styles.linkBlue}>Đa Dạng Sự Lựa Chọn</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.reasonsSection}>
                <div className={styles.reasonsContainer}>
                    <h2 className={styles.reasonsTitle}>Lý do bạn nên đặt vé tại <span className={styles.brand}>Vivutoday.com</span></h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonsCol}>
                            <div className={styles.reasonItem}>
                                <h5 className={styles.reasonHeading}>Tìm Kiếm Thông Tin Một Cách Dễ Dàng</h5>
                                <p>
                                    Giao diện của VivuToday.com được thiết kế để giúp bạn tìm kiếm thông tin nhà xe, giờ khởi hành,
                                    điểm xuất phát và điểm đến một cách nhanh chóng và dễ dàng. Thông qua việc nhập các thông tin cơ bản,
                                    bạn có thể tìm kiếm lịch trình phù hợp chỉ trong vài giây.
                                </p>
                            </div>
                            <div className={styles.reasonItem}>
                                <h5 className={styles.reasonHeading}>Tùy Chỉnh Theo Tài Chính Của Bạn</h5>
                                <p>
                                    Chúng tôi hiểu rằng mỗi hành trình có một ngân sách riêng. Với giao diện của chúng tôi, bạn có thể
                                    tùy chỉnh lựa chọn phù hợp nhất và xem trong khoảng giá tiền mà bạn mong muốn. Điều này giúp bạn
                                    tiết kiệm chi phí và vẫn tận được các lựa chọn phù hợp với túi tiền.
                                </p>
                            </div>
                        </div>

                        <div className={styles.reasonsCenter}>
                            <img src={mascotCenter} alt="Mascot" className={styles.reasonsMascot} />
                        </div>

                        <div className={styles.reasonsCol}>
                            <div className={styles.reasonItem}>
                                <h5 className={styles.reasonHeading}>Lựa Chọn Nhà Xe Có Đánh Giá Cao</h5>
                                <p>
                                    Chất lượng là một yếu tố quan trọng. Trên giao diện của VivuToday.com, bạn có thể chọn lựa những nhà xe
                                    được đánh giá cao với mức đánh giá 5 sao. Điều này đảm bảo rằng bạn đang chọn một dịch vụ uy tín và
                                    chất lượng cho hành trình của mình.
                                </p>
                            </div>
                            <div className={styles.reasonItem}>
                                <h5 className={styles.reasonHeading}>Thanh Toán An Toàn</h5>
                                <p>
                                    Việc thanh toán không còn là vấn đề khiến bạn lo lắng. Chúng tôi cung cấp các phương thức thanh toán đa dạng
                                    bao gồm thanh toán trực tuyến qua ngân hàng và ePays. Đảm bảo bảo mật cao và linh hoạt trong việc chọn phương thức phù hợp
                                    và đảm bảo tính an toàn cho giao dịch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Khách hàng là trung tâm */}
            <section className={styles.centerCustomerSection}>
                <div className={styles.centerCustomerContainer}>
                    <h2 className={styles.centerCustomerTitle}>Khách hàng là trung tâm</h2>
                    <div className={styles.centerCustomerTextWrap}>
                        <p>
                            Chúng tôi luôn đặt “khách hàng là trung tâm” và xem việc làm hài lòng, đáp ứng nhu cầu của khách hàng như
                            mục tiêu hàng đầu. Chúng tôi lắng nghe và tiếp thu những đóng góp quý báu từ khách hàng, để không ngừng hoàn thiện,
                            đổi mới và cung cấp dịch vụ ngày càng tốt hơn.
                        </p>
                        <p>
                            Nếu bạn cần di chuyển đến bất kỳ tỉnh thành nào trong cả nước, hãy đến với vivutoday.com để trải nghiệm những tiện ích
                            tuyệt vời mà hệ thống của chúng tôi mang lại.
                        </p>
                    </div>
                </div>
            </section>
            {/* Section: Liên hệ với chúng tôi */}
            <section className={styles.contactSection}>
                <div className={styles.contactContainer}>
                    <h2 className={styles.contactTitle}>Liên hệ với chúng tôi</h2>
                    <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                        <label>
                            <span>Họ Và Tên:</span>
                            <input type="text" name="fullName" placeholder="Nhập họ và tên" />
                        </label>
                        <label>
                            <span>Email:</span>
                            <input type="email" name="email" placeholder="Nhập email" />
                        </label>
                        <label>
                            <span>Số Điện Thoại:</span>
                            <input type="text" name="phone" placeholder="Nhập số điện thoại" />
                        </label>
                        <label>
                            <span>Tin Nhắn:</span>
                            <input type="text" name="subject" placeholder="Nhập tiêu đề tin nhắn" />
                        </label>
                        <button className={styles.contactSubmit}>Gửi ngay</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Introduce