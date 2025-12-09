import styles from "../styles/Introduce.module.css";
import heroImg from "../assets/img/Image (9).png";
import logo from "../assets/img/logoxin.png";
import fbIcon from "../assets/img/7fd63a363dc9b60563c59524b3430767fe0e72d8.png";
import zaloIcon from "../assets/img/fd8b93ff1018b086cbdfd1c95fddb7dbc0606519.png";
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
            <Footer />
        </>
    );
}

export default Introduce