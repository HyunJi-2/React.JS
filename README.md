React.JS
=============

**계기**

팀 내에서 React 단어가 나오기 시작하면서 React를 배워야겠다고 결심

나의 첫 사수분에게 추천 받은 [누구든지 하는 리액트](https://velopert.com/3613)

**느낀점**

초반에 따라하면서 신기 & 뿌듯

사이트 강좌의 끝이 보이기 시작하면서 어려움 & 막막 (갈길이 멀음)

하면서 큰 어려움 없이 할수있음


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

# Virtual DOM을 사용하는 라이브러리
* [React](https://reactjs.org/)
* [Vue](https://kr.vuejs.org/v2/guide/comparison.html)
* [Marko](https://markojs.com/docs/why-is-marko-fast/)
* [Maquette](https://maquettejs.org/)
* [Mithril](https://mithril.js.org/vnodes.html)


리액트 라이브러리는 뷰 쪽만 관리하게 하고 나머지 기능은 **써드 파티 라이브러리**가 담당하게 함으로서,

리액트는 리액트 라이브러리로서 더욱 성숙해질 수가 있음


# react 프로젝트 작업
## 작업 전 설치해야 하는 항목
* 코드에디터 (제가 사용한 에디터는 [webstorm](https://www.jetbrains.com/webstorm/))
* 윈도우 사용자라면 [Git for Windows](https://gitforwindows.org/) 설치. Git Bash 사용
* [node.js](https://nodejs.org/ko/download/) : webpack과 babel을 사용하기 위해 설치. macOS, Linux의 경우 [nvm](https://github.com/creationix/nvm)을 통해 설치하는것을 권장 (업데이트 하기도 쉽고, 터미널을 통해 어떤 버전을 사용 할지 설정 할 수도 있어서 편리)
* [yarn](https://yarnpkg.com/en/docs/install#windows-stable) : 조금 개선도니 npm이라고 생각하면 된다 함. 프로젝트에서 사용되는 라이브러리를 설치하고 해당 라이브러리들의 버전 관리를 하게 될때 사용. [yarn을 사용하는 이유 : 더 나은 속도, 더 나은 캐싱 시스템](https://www.keycdn.com/blog/npm-vs-yarn)
* webpack : 여러가지 파일을 한개로 결합하기 위해 사용
* babel : 새로운 자바스크립트 문법들을 위해 사용
등의 도구를 설치하여 프로젝트를 설정해 주어야 함

페이스북에서 제공해주는 도구 [create-react-app](https://github.com/facebook/create-react-app)을 통해서 간단하게 준비할 수 있음

리액트 프로젝트를 만들게 되면서 JSX 문법으로 작성한 컴포넌트를 여러가지 파일로 분리해서 저장
여러가지의 파일을 한개로 결합하기 위해서는 Webpack 도구를 사용
새로운 자바스크립트 문법들을 사용하기 위해서는 Babel 도구를 사용

## 정리
* 컴포넌트
* props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값. 자식 컴포넌트에서는 props를 받아오기만 하고 받아온 props를 수정할수 없음
* state : 컴포넌트 내부에 선언. 내부에서 값을 변경 가능
* LifeCycle
  - 컴포넌트 초기 생성
    + constructor : 컴포넌트 생성자 함수. 컴포넌트가 새로 만들어질때마다 함수 호출
      
          constructor(props) {
            super(props);
          }

    + componentDidMount : 컴포넌트가 화면에 나타나게 됐을때 호출
    
          componentDidMount() {
            // 외부 라이브러리 연동: D3, masonry, etc
            // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
            // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
          }
    
  - 컴포넌트 업데이트
    + static getDerivedStateFromProps() : props로 받아온 값을 state로 동기화 하는 작업을 해줘야하는 경우에 사용
    
          static getDerivedStateFromProps(nextProps, prevState) {
            // 여기서는 setState 를 하는 것이 아니라 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로 사용
            /*
            if (nextProps.value !== prevState.value) {
              return { value: nextProps.value };
            }
            return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
            */
          }

    + shouldComponentUpdate : 컴포넌트 최적화 하는 작업에서 매우 유용하게 사용
    
          shouldComponentUpdate(nextProps, nextState) {
            // return false 하면 업데이트를 안함
            // return this.props.checked !== nextProps.checked
            return true;
          }
      
    + getSnapshotBeforeUpdate() : 발생하는 시점 → render(), getSnapshotBeforeUpdate(), 실제 DOM에 변화 발생,componentDidUpdate.
    DOM변화가 일어나기 직전의 DOM 상태를 가져오고 여기서 리턴하는 값은 componentDidUpdate 에서 3번째 파라미터로 받아올수 있음
    
          getSnapshotBeforeUpdate(prevProps, prevState) {
            // DOM 업데이트가 일어나기 직전의 시점입니다.
            // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
            // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
            // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데, 
            // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
              if (prevState.array !== this.state.array) {
                const {
                  scrollTop, scrollHeight
                } = this.list;

                // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
                return {
                  scrollTop, scrollHeight
                };
              }
            }
        
          componentDidUpdate(prevProps, prevState, snapshot) {
            if (snapshot) {
              const { scrollTop } = this.list;
              if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않습니다.
              const diff = this.list.scrollHeight - snapshot.scrollHeight;
              this.list.scrollTop += diff;
            }
          }
        
      + componentDidUpdate : 컴포넌트에서 render() 를 호출하고 난 다음에 발생. 이 시점에선 this.props와 this.state 가 바뀌어 있음.
      파라미터를 통해 이전의 값인 prevProps 와 prevState 를 조회 할 수 있음. getSnapshotBeforeUpdate 에서 반환한 snapshot 값은 세번째 값으로 받아옴.
      
              componentDidUpdate(prevProps, prevState, snapshot) {

              }
    
  * 컴포넌트 제거
      + componentWillUnmount : 주로 등록했었던 이벤트를 제거. 만약에 setTimeout 을 걸은것이 있다면 clearTimeout 을 통하여 제거. 추가적으로 외부 라이브러리를 사용한게 있고 해당 라이브러리에 dispose 기능이 있다면 여기서 호출
      
            componentWillUnmount() {
              // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
            }
        
  * 컴포넌트 에러 발생
      + componentDidCatch : state.error 를 true 로 설정. render 함수쪽에서 이에 따라 에러를 띄워주면 됨. 컴포넌트 자신의 render 함수에서 에러가 발생해버리는것은 잡아낼 수는 없음. 하지만 컴포넌트의 자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있음
      
            componentDidCatch(error, info) {
              this.setState({
                error: true
              });
            }



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
