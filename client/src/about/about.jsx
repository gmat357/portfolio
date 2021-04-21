import React, { Component } from 'react';
import './css/about.css';

class about extends Component {
    constructor(props) {
        super(props);
        this.age = this.componentDidMount();
    }
    
    componentDidMount(){
        var year = new Date().getFullYear();
        var birth = 1999;
        var age = year - birth + 1;
        return age;
    }

    render() {
        return (
            <div className="main_container">
                <div className="main_box">
                    <h3>안녕하세요 웹개발자 김우진입니다.</h3>
                    <p>
                        안녕하세요 저는 {this.age}살 김우진입니다. 고등학교는 줄포자동차공업고등학교를 졸업하였고 현재 서울 사이버대학교에서 컴퓨터공학과로 수강중입니다. 저는 고등학교졸업하고 바로 현장으로 가서 일을했습니다. 더울때 덥고 추울때 추운거 견디면서 1년을 일하고 군대를 준비중에 교통사고로 힘쓰는 일을 못할거 같다는 의사의 소견을 듣고 바로 IT쪽 으로 진로를 변경했습니다. 처음 배울때는 전주 그린아카데미학원에서 웹디자인 과목을 수강했습니다. 웹디자인 과목에서 프론트엔드를 배우면서 개발이라는 직업군에 호기심이 생겼습니다. HTML, CSS, JAVASCRIPT, JQUERY 을 배웠는데 엄청 기초이지만 흥미가 생겨서 광주로 학원을 옮긴 후에 본격적으로 웹개발을 배웠습니다. 하지만 학원에서는 알려주지 못하는 실무 부분이 너무 궁금했습니다. 어떻게 홈페이지를 제작하는지 과정도 궁금했고 실제로 일하시는 개발자분들은 어떻게 작업을 진행 하시는지 엄청 궁금했었습니다. 그런데 때 마침 신입을 뽑아주시는 기업에서 연락이 왔습니다. 기회라고 생각하고 취업했습니다. 하지만 스타트업이라 개발자 사수가 없는 환경이여서 누구에게도 물어볼수도 없었습니다. 프론트로 취업을했지만 백엔드부분을 해주시는 분도 없었습니다. 프론트만으로는 홈페이지를 구성하기에는 조금 제한된 사항이 많이 있었습니다. 그래서 백엔드는 외주로 보내신다는 말을 듣고 작업을 진행하던 도중 제가 프론트를 어떻게 구성해야 백엔드에서 편하게 작업할 수 있는지 궁금해졌습니다. 그래서 제가 백엔드랑 프론트를 같이 해보면 어떨까 생각을 했습니다. 그래서 개발자 포럼에서 NODEJS를 추천해주셔서 처음 백엔드의 발걸음을 NODEJS로 향했습니다. NODEJS 를 배워서 현재 회사에서 백엔드 부분까지 채웠습니다. 저는 제 목표를 이루기위해 시간 틈틈이 제 커리어를 성장해 나갔고, 현재는 처음보다 많은 기술들을 사용해서 홈페이지를 구축할 수 있습니다. 기술을 하나씩 배울때마다 욕심이생겨서 다른것도 해보고싶고 배운 기술들로 아직 못해 본 것도 많습니다. 제 목표는 가지고 있는 기술을 이용해서 할 수 있는건 전부 해보는 것이 제 목표입니다.
                    </p>
                </div>
            </div>
        );
    }
}

export default about;