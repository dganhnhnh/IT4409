import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import HeaderAdmin from '../../Header/HeaderAdmin';
import './style_homepage.scss'
import { Link } from 'react-router-dom';
import { transform } from 'lodash';
class HomePage extends Component {

    state = {

    }

    componentDidMount() {
    }


    // Cần chèn logo vào header
    render() {
        return (
            <div className="homepage">
                <div id="homepage-header">

                    <div id="homepage-logo-app">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/logo-symbol.png`} alt='avatar' style={{ height: "40px" } } />
                            <div id='headerUser-left-logo-p'>
                                EduSmart
                            </div>
                    </div>
                    <ul id="homepage-nav">
                        <li ><a href="">Tính năng</a></li>
                        <li ><a href="">Trợ giúp</a></li>
                        <li><a href="./aboutus">Nhóm thực hiện</a></li>
                    </ul>
                </div>
                <div id='homepage-content'>
                    <div id='homepage-big-image'>
                        <img src="./assets/img/Code-typing-rafiki.png" alt="img" class="homepage-right-img" />
                    </div>
                    <div id='homepage-slogan'>
                        <h1 id='homepage-h1'>
                            Học lập trình<br />mọi lúc,<br />mọi nơi!
                        </h1>
                        <p>
                            Website học lập trình EduSmart - Học lập trình để đi làm.<br/>BTL học phần Công nghệ Web & Dịch vụ trực tuyến nhóm 2.
                        </p>
                        <Link to="/login">
                            <div id='homepage-login_button'>
                                <button>Bắt đầu ngay</button>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className='homepage-footer'>

                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
