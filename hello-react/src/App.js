import React, { Component } from 'react';
import MyName from './MyName';
import MyName2 from './MyName2';
import Counter from './Counter';
import CounterError from './CounterError';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>defaultProps</h1>
                <MyName name="리액트" />

                <h1>함수형 컴포넌트</h1>
                <MyName2 name="리액트2" />

                <h1>Counter</h1>
                <Counter />

                <h1>LifeCycle API</h1>
                <p>React Component 가 사용될 때 각 상황에 따라 호출이 되는 LiftCycle API</p>
                <p>Conter.js 내에 console log</p>
                {/*
                <h2>컴포넌트 초기 생성</h2>
                <ul>
                    <li>constructor : 컴포넌트가 새로 만들어질 때 마다 호출</li>
                    <li>componentWillMount : 화면에 나가기 직전에 호출되는 API. 주로 환경에서(서버사이드) 호출하는 용도로 사용했었음. <b>v16.3 에서는 deprecated. 이후에는 UNSAFE_componentWillMount() 으로 사용</b></li>
                    <li>componentDidMount : 화면에 나타나게 됐을때 호출. 해당 컴포넌트에서 필요로 하는 데이터를 요청하기 위해 axios, fetch 등을 통하여 ajax 요청을 하거나 DOM의 속성을 읽거나 직접 변경하는 작업을 함</li>
                </ul>

                <h2>컴포넌트 업데이트</h2>
                <ul>
                    <li>componentWillReceiveProps : 컴포넌트가 새로운 props 를 받게 됐을때 호출. 이 안에서는 주로 state 가 props 에 따라 변해야 하는 로직을 작성함. 새로 받게 될 props 는 nextProps 로 조회 할 수 있으며 이때 this.props 를 조회하면 업데이트가 되기 전의 API 임. <b>v16.3 에서는 deprecated. 이후에는 UNSAFE_componentWillReceiveProps() 으로 사용</b> 상황에 따라 getDerivedStateFromProps 로 대체 가능</li>
                    <li><b>NEW</b> static getDerivedStateFromProps() : v16.3 이후에 만들어진 라이프사이클 API. props 로 받아온 값을 state 로 동기화 하는 작업을 해줘야 하는 경우에 사용</li>
                    <li>shouldComponentUpdate : 컴포넌트를 최적화 하는 작업에서 매우 유용하게 사용. 변화가 발생한 부분만 감지해내기 위해서는 Virtual DOM 에 한번 그려줘야 함. 이 함수는 기본적으로 true 를 반환. 따로 작성을 해주어서 조건에 따라 false 를 반환하면 해당 조건에는 render 함수를 호출하지 않음</li>
                    <li>componentWillUpdate : true 를 반환했을때에만 호출이 됨. 주로 애니메이션 효과를 초기화 하거나 이벤트 리스너를 없애는 작업을 함. 이 함수가 호출되고 난 다음에는 render()가 호출이 됨. <b>v16.3 에서는 deprecated. 이후에는 getSnapshotBeforeUpdate 으로 대체 가능</b></li>
                    <li>><b>NEW</b> getSnapshotBeforeUpdate() : 1. render() , 2. getSnapshotBefoerUpdate() , 3. 실제 DOM 에 변화 발생 , 4. componentDidUpdate . DOM 변화가 일어나기 직전의 DOM 상태를 가져오고, 여기서 리턴하는 값은 componentDidUpdate 에서 3번째 파라미터로 받아올 수 있음(snapshot)</li>
                    <li>componentDidUpdate : 컴포넌트에서 render() 를 호출하고 난 다음에 발생. 이 시점에선 this.props 와 this.state 가 바뀌어 있음. 파라미터를  통해 이전 값인 prevProps 와 prevState 를 조회 할 수 있슴. 그리고 getSnapshotBeforeUpdate 에서 반환한 snapshot 값은 세번째로 받아옴</li>
                </ul>

                <h2>컴포넌트 제거</h2>
                <ul>
                    <li>componentWillUnmount : 주로 등록 했었던 이벤트를 제거. setTimeout 을 걸은것이 있다면 clearTimeout 을 통하여 제거를 해야함. 외부 라이브러리를 사용한게 있고 해당 라이브러리에 dispose 기능이 있다면 여기서 호출 해주면 됨</li>
                </ul>
                <h2>componentDidCatch</h2>
                <p>컴포넌트 에러 발생</p>
                 */}

                <h2>컴포넌트 에러발생</h2>
                <CounterError />
                <p>자주 에러가 발생하는 이유</p>
                <ul>
                    <li>존재하지 않는 함수를 호출하려고 할때 (예를 들어 props 로 받았을줄 알았던 함수가 전달되지 않았을때)</li>
                    <li>배열이나 객체가 올 줄 알았는데 해당 객체나 배열이 존재하지 않을때</li>
                </ul>
                <p>이러한 에러들은 render 함수에서 다음과 같은 형식으로 막아줄수 있음.</p>

                {/*
                        에러 방지 방법1
                render() {
                    if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;
                    // object 나 array 를 사용하는 코드
                }

                        에러 방지 방법2 : deraultProps 를 통해서 컴포넌트의 기본값을 설정
                 class Sample extends Component {
                     static defaultProps = {
                         onIncrement: () => console.warn('onIncrement is not defined'),
                         object: {},
                         array: []
                     }
                 }
                 */}
            </div>
        );
    }
}

export default App;