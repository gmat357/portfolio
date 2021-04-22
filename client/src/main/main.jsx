import React, { Component } from 'react';
import "../main/css/main.css";

class main extends Component {    

    render() {
        return (
            <div className="main_container">
                <div className="main_title_box">
                    <h3>Welcome Woojin Portfolio</h3>
                    <p>React로 제작한 포트폴리오 홈페이지 입니다.</p>
                    <p>포트폴리오에 오신걸 환영합니다.</p>
                </div>
                <div className="main_content_box">
                    <ul>
                        <li>
                            <img src="/img/design.png" alt="디자인아이콘"/>
                            <h4>Design</h4>
                            <p>
                                2020년도 전주 그린아카데미학원 웹디자인 부분 강의 수강 중 GTQ 포토샵1급 자격증 취득 하였고, 포토샵, 일러스트 툴 사용범위는 디자이너와 소통하며 사용가능한 정도이고, 창의성을 가지며 디자인하는 것은 부족합니다. 
                            </p>
                        </li>
                        <li>
                        <img src="/img/front.png" alt="디자인아이콘"/>
                            <h4>Front_End</h4>
                            <p>
                                HTML, CSS, JAVASCRIPT, JQUERY, AJAX, SCSS 를 활용하여 반응형, PC, 모바일 홈페이지를 제작할 수 있습니다. 현재 포트폴리오 홈페이지는 React로 제작했으며, React커리어를 쌓기 위해 프론트는 React로 선택했습니다.
                            </p>
                        </li>
                        <li>
                        <img src="/img/back.png" alt="디자인아이콘"/>
                            <h4>Back_End</h4>
                            <p>
                                JAVASCRIPT 기반인 NODEJS 로 백엔드를 구성했으며, EXPRESS 라이브러리를 이용하여 서버 구축 및 라우터 설정 등 을 하였습니다. 데이터베이스는 MYSQL, MongoDB 사용할 수 있습니다. 주 DB는 MYSQL입니다.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="git_container">
                    <div className="git_box">
                    <h3>GIT HUB</h3>
                    <p>
                        포트폴리오 관련 소스는 GIT 에 저장되어있습니다.
                        이전 회사에서 만든 홈페이지 관련 소스들은 보안상 업로드하지못했습니다. 제가 포트폴리오로 사용할 수 있는것만 올렸습니다. 
                    </p>
                    <a href="/">
                        LOOK MY SOURCE
                    </a>
                    </div>
                </div>
                <div className="skils_list">
                    <div className="skils_box">
                        <div className="left_skils">
                            <img src="/img/html.png" alt="스킬 아이콘"/>
                            <img src="/img/css.png" alt="스킬 아이콘"/>
                            <img src="/img/scss.png" alt="스킬 아이콘"/>
                            <img src="/img/js.png" alt="스킬 아이콘"/>
                            <img src="/img/jquery.png" alt="스킬 아이콘"/>
                            <img src="/img/nodejs.png" alt="스킬 아이콘"/>
                            <img src="/img/react.png" alt="스킬 아이콘"/>
                            <img src="/img/mysql.png" alt="스킬 아이콘"/>
                            <img src="/img/mongodb.png" alt="스킬 아이콘"/>
                            <img src="/img/git.png" alt="스킬 아이콘"/>
                        </div>
                        <div className="right_skils">
                            <h3>현재 사용 가능한 기술</h3>
                            <p>
                                개발은 정답은 없다고 생각합니다. 해결이 가능하게 코드를 구현하는 것이 제일 중요하고 가독성과 재사용이 가능한 코드를 작성하는게 제일 좋은 코드라고 생각합니다. 여기 나와있는 기술에서 제 커리어가 100%가 될 수는 없습니다. 코드는 항상 최신화 되면서 트랜드를 따라가야하기 때문에 공부는 항상 해야됩니다. 그래도 여기있는 기술을 사용해서 홈페이지 제작은 가능합니다. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default main;