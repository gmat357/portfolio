import React, { Component } from 'react';
import './css/header.css';

class header extends Component {
    render() {
        return (
            <div className="header_container">
                <div className="header_text_box">
                    <h4>Woo Jin</h4>
                    <h2>Portfolio Web Site</h2>
                    <h5>2020 - 2021</h5>
                </div>
                <div className="header_bg"></div>
            </div>
        );
    }
}

export default header;