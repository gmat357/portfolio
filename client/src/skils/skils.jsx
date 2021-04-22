import React, { Component } from 'react';
import "../skils/css/skils.css";

class skils extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/js/graph.js";
        script.async = true;
        document.head.appendChild(script);
    }

    render() {
        return (
            <div className="skils_container">
                <h3 className="title">제가 사용할 수 있는 기술입니다.</h3>
                <div className="skils_box">
                    <ul>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/photoshop.png" alt="" />
                                    <h3 value="#1e42b1">60%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/lillust.png" alt="" />
                                    <h3 value="#e47b3a">60%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/html.png" alt="" />
                                    <h3 value="#ef6233">90%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/css.png" alt="" />
                                    <h3 value="#1797d9">90%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/scss.png" alt="" />
                                    <h3 value="#e24941">90%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/js.png" alt="" />
                                    <h3 value="#f6d23a">90%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/jquery.png" alt="" />
                                    <h3 value="#196eac">95%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/nodejs.png" alt="" />
                                    <h3 value="#8cc525">80%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/react.png" alt="" />
                                    <h3 value="#88e2f9">30%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/mysql.png" alt="" />
                                    <h3 value="#648da9">85%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/mongodb.png" alt="" />
                                    <h3 value="#53974b">40%</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="graph_bar">
                                <div className="graph_bg">
                                    <img src="/img/git.png" alt="" />
                                    <h3 value="#000000">60%</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default skils;