import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs_style.scss';


import img1 from './DA.jpg';
import img2 from './HA.jpg';
import img3 from './NA.jpg';
import img4 from './TA.jpg';

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            a: '#ff652f',
            b: 'white',
            c: 'white',
            intervalId1: null,
            intervalId2: null,
            intervalId3: null
        };
    }

    // componentDidMount() {
    //     // Thiết lập interval để mỗi 1000ms tăng currentIndex lên 1

    //     const intervalId1 = setInterval(() => {
    //         this.setState({
    //             a: "#ff652f",
    //             b: "white",
    //             c: "white"
    //         });
    //     }, 3000);
    //     this.setState({ intervalId1 });
    //     setTimeout(() => {
    //         const intervalId2 = setInterval(() => {
    //             this.setState({
    //                 a: "white",
    //                 b: "#ff652f",
    //                 c: "white"
    //             });
    //         }, 3000);
    //         this.setState({ intervalId2 });
    //     }, 1000);
    //     setTimeout(() => {
    //         const intervalId3 = setInterval(() => {
    //             this.setState({
    //                 a: "white",
    //                 b: "white",
    //                 c: "#ff652f"
    //             });
    //         }, 3000);
    //         this.setState({ intervalId3 });
    //     }, 2000)
    // }

    // componentWillUnmount() {
    //     // Xóa interval khi component bị unmount
    //     clearInterval(this.state.intervalId1);
    //     clearInterval(this.state.intervalId2);
    //     clearInterval(this.state.intervalId3);
    // }
    render() {

        return (
            <div className='about-us'>

                <main>
                    {/* <section className="home row">
                        <div className='col-6 hihi'>

                            <h2>Xin chào! Tôi tên là</h2>
                            <h1 className="home__name">
                                <span style={{ color: this.state.a }}>Lê</span>
                                <span style={{ color: this.state.b, marginLeft: "10px" }}>Văn</span>
                                <span style={{ color: this.state.c, marginLeft: "10px" }}>Do</span>
                                <h2>Full-Stack developer</h2>
                            </h1>
                            <h6>Sinh viên năm 4 Đại học Bách khoa Hà Nội.</h6>
                            <h6>Chuyên ngành: Khoa học máy tính - IT1</h6>
                            <h6>Năm sinh 2001, năm vào trường 2019</h6>
                            <div className="social-icons">
                                <a href="#!" className="" id="!">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                                <a href="https://www.facebook.com/levando.0708" className="" id="!">
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                                <a href="#!" className="" id="!">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                                <a href="https://github.com/levando20194017" className="" id="!">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div>
                                <h5>Website learn programming - EduSmart</h5>
                                <p>Website có lấy 1 phần ý tưởng từ <b>F8</b>.</p>
                                <p><b>Các chức năng mà trang web có.</b></p>
                                <p style={{ color: "#ff652f" }}><b>Về phía người dùng.</b></p>
                                <p>- Đăng kí, đăng nhập, thay đổi ảnh đại diện, thay đổi mật khẩu.</p>
                                <p>- Cập nhật thông tin cá nhân, xem thông tin người khác.</p>
                                <p>- Đăng bài viết, bình luận, chỉnh sửa bài viết và chỉnh sửa bình luận.</p>
                                <p>- Người dùng có thể xóa bài viết của mình, tuy nhiên thì họ không có quyền thực hiện điều đó đối với người khác.</p>
                                <p>- Like bài viết, like bình luận.</p>
                                <p>- Đăng kí khóa học miễn phí với, học lần lượt theo từng video bài giảng, không được phép học vượt.</p>
                                <p style={{ lineHeight: "1.5" }}>Ở đây, do đang quá trình test nên tôi để người dùng hoàn thành 10% thời lượng video thì sẽ được xét là hoàn thành bài học đấy.</p>
                                <p>- Xem được các danh sách khóa học mà mình đăng kí và tiến trình của khóa học ở thanh header.</p>
                                <p style={{ lineHeight: "1.5" }}>- Có tiến trình của người dùng đối với mỗi khóa học, tức là khi hoàn thành 1 video thì nó sẽ cập nhật theo từng phần trăm hoàn thành và giống với <b>F8</b>.</p>
                                <p style={{ color: "#ff652f" }}><b>Về phía Quản trị viên.</b></p>
                                <p>- Khi người dùng đăng nhập với tài khoản admin thì nó sẽ tự động chuyển sang trang quản lí.</p>
                                <p>- Ở trang này thì admin có thể quản lí thành viên và quản lí khóa học</p>
                                <p>- Admin có thể thêm, sửa, xóa thành viên hoặc có thể chỉnh sửa cho người đấy lên làm quản trị.</p>
                                <p>- Thêm, sửa, xóa các khóa học, bài giảng và các danh sách video theo từng bài giảng.</p>
                                <p><b>Note:</b> Video thêm vào ở đây là được lấy từ videoID của youtube.</p>
                                <h5>Ngôn ngữ và công nghệ sử dụng để tạo nênn website này</h5>
                                <p>- <b>Back-end</b>: + Công cụ quản lí cơ sở dữ liệu DBeaver, Hệ quản trị cơ sở dữ liệu PostgreSQL.</p>
                                <p>+ Framework: Express.</p>
                                <p style={{ lineHeight: "1.5" }}>+ Thư viện: Sequelize cung cấp một số tính năng như tạo bảng, định nghĩa quan hệ giữa các bảng, tạo, đọc, cập nhật và xóa dữ liệu, và thực hiện các truy vấn phức tạp.</p>
                                <p>- <b>Front-end:</b> +Thư viện: reactJS, sử dụng Redux để quản lí trạng thái cho ứng dụng web.</p>
                                <p>+ Ngôn ngữ: javascript, HTML, SCSS.</p>
                            </div>
                        </div>
                    </section> */}
                    <div className="about-member">
                        <div className="tour-section">
                            <div className="content-section">
                                <h2 className="section-heading text-white">CÁC THÀNH VIÊN</h2>
                                <p className="section-sub-heading text-white">Nhóm 2 - lớp Công nghệ Web & Dịch vụ trực tuyến - 154054 - IT4409.</p>

                                <ul className="ticket-list">
                                    <li className="ticket-list-item">
                                        <div className='ticket-list-item-name'>1. Nguyễn Dương Ánh - 20210082</div>
                                        <span className="sold-out">Nhóm trưởng</span>
                                    </li>
                                    <li className="ticket-list-item">
                                        <div className='ticket-list-item-name'>2. Lê Hoàng Anh - 20215303</div>
                                        <span className="sold-out">Thành viên</span>
                                    </li>
                                    <li className="ticket-list-item">
                                        <div className='ticket-list-item-name'>3. Nguyễn Nam Anh - 20210036</div>
                                        <span className="sold-out">Thành viên</span>
                                    </li>
                                    <li className="ticket-list-item">
                                        <div className='ticket-list-item-name'>4. Nguyễn Tuấn Anh - 20215525</div>
                                        <span className="sold-out">Thành viên</span>
                                    </li>
                                </ul>

                                <div className="places-list">

                                    <div className="place-item">
                                        <img src={img1} alt="img#1" className="place-img" />
                                        <div className="place-body">
                                            <h3 className="place-heading">Nguyễn Dương Ánh - 20210082</h3>
                                            <p className="place-time">Nhóm trưởng</p>
                                            <p className="place-desc">- Thiết kế cơ sở dữ liệu<br />- Thiết kế API<br />- Lập trình Backend</p>

                                        </div>
                                    </div>

                                    <div className="place-item">
                                        <img src={img2} alt="img#2" className="place-img" />
                                        <div className="place-body">
                                            <h3 className="place-heading">Lê Hoàng Anh - 20215303</h3>
                                            <p className="place-time">Thành viên</p>
                                            <p className="place-desc">- Thiết kế giao diện<br />- Lập trình giao diện<br />- Kiểm thử và tích hợp API</p>

                                        </div>
                                    </div>

                                    <div className="place-item">
                                        <img src={img3} alt="img#3" className="place-img" />
                                        <div className="place-body">
                                            <h3 className="place-heading">Nguyễn Nam Anh - 20210036</h3>
                                            <p className="place-time">Thành viên</p>
                                            <p className="place-desc">- Thiết kế giao diện<br />- Lập trình giao diện<br />- Kiểm thử và tích hợp API</p>
                                        </div>
                                    </div>

                                    <div className="place-item">
                                        <img src={img4} alt="img#4" className="place-img" />
                                        <div className="place-body">
                                            <h3 className="place-heading">Nguyễn Tuấn Anh - 20215525</h3>
                                            <p className="place-time">Thành viên</p>
                                            <p className="place-desc">- Thiết kế giao diện<br />- Lập trình giao diện<br />- Kiểm thử và tích hợp API</p>
                                        </div>
                                    </div>

                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-function">
                        <div className="content-section">
                            <h2 className="section-heading">VỀ CHƯƠNG TRÌNH</h2>
                            <p className="section-sub-heading">Các chức năng và công nghệ sử dụng</p>
                            <p className="about-text">
                                EduSmart là website học lập trình qua video. Trong quá trình thiết kế và lập trình website, chúng em đã tham khảo ý tưởng của trang F8.<br />
                                <b>Các chức năng mà trang web:</b><br />
                                <b>Về phía người dùng.</b><br />
                                - Đăng kí, đăng nhập, thay đổi ảnh đại diện, thay đổi mật khẩu.<br />
                                - Cập nhật thông tin cá nhân, xem thông tin người khác.<br />
                                - Đăng bài viết, bình luận, chỉnh sửa bài viết và chỉnh sửa bình luận.<br />
                                - Người dùng có thể xóa bài viết của mình, tuy nhiên thì họ không có quyền thực hiện điều đó đối với người khác.<br />
                                - Like bài viết, like bình luận.<br />
                                - Đăng kí khóa học miễn phí với, học lần lượt theo từng video bài giảng, không được phép học vượt.<br />
                                Ở đây, do đang quá trình test nên chúng em để người dùng hoàn thành 10% thời lượng video thì sẽ được xét là hoàn thành bài học đấy.<br />
                                - Xem được các danh sách khóa học mà mình đăng kí và tiến trình của khóa học ở thanh header.<br />
                                - Có tiến trình của người dùng đối với mỗi khóa học, tức là khi hoàn thành 1 video thì nó sẽ cập nhật theo từng phần trăm hoàn thành và giống với <b>F8</b>.<br />
                                <b>Về phía Quản trị viên.</b><br />
                                - Khi người dùng đăng nhập với tài khoản admin thì nó sẽ tự động chuyển sang trang quản lí.<br />
                                - Ở trang này, admin có thể quản lí thành viên và quản lí khóa học.<br />
                                - Admin có thể thêm, sửa, xóa thành viên hoặc có thể chỉnh sửa cho người đấy lên làm quản trị.<br />
                                - Thêm, sửa, xóa các khóa học, bài giảng và các danh sách video theo từng bài giảng.<br />
                                <b>Note:</b> Video thêm vào ở đây là được lấy từ videoID của youtube.<br /><br />
                                <b>Ngôn ngữ và công nghệ sử dụng để tạo nên website này</b><br />
                                - <b>Back-end</b>: <br />
                                + Công cụ quản lí cơ sở dữ liệu DBeaver, Hệ quản trị cơ sở dữ liệu PostgreSQL.<br />
                                + Framework: Express.<br />
                                + Thư viện: Sequelize cung cấp một số tính năng như tạo bảng, định nghĩa quan hệ giữa các bảng, tạo, đọc, cập nhật và xóa dữ liệu, và thực hiện các truy vấn phức tạp.<br />
                                - <b>Front-end:</b> <br />
                                +Thư viện: ReactJS, sử dụng Redux để quản lí trạng thái cho ứng dụng web.<br />
                                + Ngôn ngữ: JavaScript, HTML, SCSS.<br />
                            </p>

                        </div>

                    </div>
                    <div className="about-contact">

                    </div>
                </main>
                <userHeader />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
