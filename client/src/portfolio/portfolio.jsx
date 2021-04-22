import React, { Component } from 'react';
import './css/portfolio.css';

class portfolio extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/js/portfolio.js";
        script.async = false;
        document.head.appendChild(script);
    }

    render() {
        return (
            <div className="portfolio_container">
                <div className="portfolio_box">
                    <div className="content_list">
                        <h3>Node.js 웹</h3>
                        <p>실제 운영하는 사이트 입니다.</p>
                        <ul>
                            <li>
                                <a href="http://driving.cafe24app.com/"></a>
                                아빠대리운전
                            </li>
                            <li>
                                <a href="http://sports.cafe24app.com/"></a>
                                스포츠 재활 센터
                            </li>
                            <li>
                                <a href="http://jeilcnc.cafe24app.com/"></a>
                                제일시앤씨 KT
                            </li>
                            <li>
                                <a href="http://a-company.kr/"></a>
                                어컴퍼니
                            </li>
                            <li>
                                <a href="http://www.nurivr.com/"></a>
                                프리즘미디어
                            </li>
                        </ul>
                    </div>
                </div>
                    <div className="content_box">
                    </div>
            </div>
        );
    }
}

export default portfolio;