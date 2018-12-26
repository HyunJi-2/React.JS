React.JS
=============

# react 특징
* JSX 문법 사용 (JSX : JavaScript의 구문 확장 React.createElement)
* Virtual DOM (변화를 가상 DOM에서 미리 인지하여 변화함. 가상DOM 변화를 마지막에 실제 DOM에게 던져 줌)
* 컴포넌트 기반의 라이브러리 (component : 데이터를 넣으면 우리가 지정한 user interface를 조립해서 보여줌. 코드의 재사용성과 유지보수성을 증가 시켜줌)
* 라우터, 상태관리 같은 기능들이 자체에 내장 되어있지 않고 공식적인 라이브러리도 없음. 원하는 스택을 골라서 사용 (라이브러리를 만들어서 쓸 수 있음)
* 자유도가 높아 선택장애가 일어날 수 있음
* [2018.12.26 기준으로 사랑받는 프레임워크 2위](https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-tools) (2017년에는 1위라고 했는데 ㅠㅠㅠㅠㅠㅠ)
* 통계적으로 재사용 의향이 높음
![react 재사용률](https://i.imgur.com/z1GYYpi.png "프레임워크별 재사용률 조사")


# 다른 프레임워크 살펴보기
## Angular.js
* 앵귤러만의 문법이 있음
* 라우터, HTTP 클라이언트 등 프레임워크 안에 내장되어 있음
### Angular1
* 만들어진지 오래 됨
* 사용률이 많음
### Angular2
* 매우 성숙함
* 인지도 측면에서는 성장하는 단계
* 주로 타입스크립트랑 함께 사용

## Vue.js
* 입문자가 사용하기에 쉬움
* 단순히 CDN에 있는 파일을 로딩하는 형태로 스크립트를 불러와서 사용하기 편함
* 공식 라우터, 상태관리 라이브러리가 존재
* HTML을 템플릿처럼 그대로 사용할 수도 있음

*Virtual DOM을 사용하는 라이브러리*
* [React](https://reactjs.org/)
* [Vue](https://kr.vuejs.org/v2/guide/comparison.html)
* [Marko](https://markojs.com/docs/why-is-marko-fast/)
* [Maquette](https://maquettejs.org/)
* [Mithril](https://mithril.js.org/vnodes.html)


**리액트 라이브러리는 뷰 쪽만 관리하게 하고, 나머지 기능은 써드 파티 라이브러리가 담당하게 함으로서, 리액트는 리액트 라이브러리로서 더욱 성숙해질 수가 있는것이고 (페이스북 개발팀이 리액트 자체적인 기능에 더욱 많은 연구를 쏟을 수 있겠죠), 나머지 라이브러리들에서는 종류가 많다보니, 많은 개발자가 정말 다양한 시도를 하게 될 것이고, 덕분에 계속해서 성장**


# react 프로젝트 작업
## 작업 전 설치해야 하는 항목
* node.js : webpack과 babel을 사용하기 위해 설치
* yarn : 조금 개선도니 npm이라고 생각하면 된다 함. 프로젝트에서 사용되는 라이브러리를 설치하고 해당 라이브러리들의 버전 관리를 하게 될때 사용
* webpack : 여러가지 파일을 한개로 결합하기 위해 사용
* babel : 새로운 자바스크립트 문법들을 위해 사용
등의 도구를 설치하여 프로젝트를 설정해 주어야 함

페이스북에서 제공해주는 도구 [create-react-app](https://github.com/facebook/create-react-app)을 통해서 간단하게 준비할 수 있음



* * *

# 배운 목차
* 리액트는 무엇인가
* 리액트프로젝트 시작하기
* JSX
* props와 state
* LifeCycle API
* input 상태 관리하기
* 배열 다루기(1) 생성과 렌더링
* 배열 다루기(2) 제거와 수정
* 불변성을 지키는 이유와 업데이트 최적화
* 앞으로의 공부방향
