import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        const name = 'react';
        const value = 2; // IIEF Example
        const style = {
            backgroundColor: 'black',
            padding: '20px',
            color: 'white',
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center'
        };
        return (
            <Fragment>
                <div style={style}>
                    Hello {name}!
                </div>
                <div className="App2">
                    How are you?
                </div>
                <div className="App3">
                    I'm fine thank you. And you?
                </div>
                <div>
                    <h1 // 주석 테스트
                    >삼항연산자</h1>
                    <p /* 신기하네 오류가 안나 */
                    >삼항연산자는 true 일 때와 false 일 때 다른것들을 보여주고 싶을 때 사용</p>
                    <h2>Example</h2>
                    {
                        1 + 1 === 2 ? (<div>맞아요!</div>) : (<div>틀려요!</div>)
                    }
                    <h1>AND연산자</h1>
                    <p>AND 연산자는 단순히 우리의 조건이 true 일 때만 보여주고 false 경우 아무것도 보여주고 싶지 않을 때 사용</p>
                    <h2>Example</h2>
                    {
                        1 + 1 === 2 && (<div>맞아요!</div>)
                    }
                    <h1>IF 복잡한 조건</h1>
                    <p>복잡한 조건들은 웬만하면 JSX 밖에서 로직을 작성하는것이 좋습니다. 하지만, 꼭 JSX 내부에서 작성해야 한다면 IIFE 를 사용</p>
                    <h2>Example</h2>
                    {
                        (function() {
                            if (value === 1) return (<div>하나</div>);
                            if (value === 2) return (<div>둘</div>);
                            if (value === 3) return (<div>셋</div>);
                        })()
                    }
                    <strong>if 문 대신에 switch 문을 사용하셔도 상관 없음</strong>
                    {
                        (() => {  // 화살표 함수 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
                            if (value === 1) return (<div>하나</div>);
                            if (value === 2) return (<div>둘</div>);
                            if (value === 3) return (<div>셋</div>);
                        })()
                    }
                </div>
            </Fragment>
        );
    }
}

export default App;
