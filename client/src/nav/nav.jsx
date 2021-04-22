import React, { Component } from 'react';
import './css/nav.css';
class nav extends Component {

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.async = false;
        document.head.appendChild(script);
    }

    render() {
        return (
            <div className="nav_container">
                <div className="nav_box">
                    <div className="menu_box">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/skils">Skils</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default nav;