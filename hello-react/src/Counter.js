import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props) {    // 1 캐시  ==> 컴포턴트가 새로 만들어 질때마다 호출
        super(props);
        console.log('1 constructor');
    }

    componentWillMount() {  // 2 캐시  ==> 환경(서버사이드)에서 호출
        console.log('2 componentWillMount (deprecated)');
    }

    componentDidMount(){    // 4 캐시  ==> 컴포넌트가 화면에 나타나게 됐을때 호출
        console.log('4 componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){       // 8 , 12  ==> render() 를 호출하고 난 다음에 발생. getSnapshotBeforeUpdate 에서 반환한 snapshot 값은 세번째 값으로 받아옴
        console.log('8 componentDidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState){    // 5 , 9  ==> 부모 컴포넌트가 리렌더링 되면서 자식 컴포넌트들도 렌더링 됨.(render() 함수 호출) true 경우에만 render 함수를 호출
        // 5의 배수라면 리렌더링 하지 않음
        console.log('5 shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState){      // 6 , 10  ==> shouldComponentUpdate 에서 true 를 반환했을 때에만 호출. 애니메이션 효과를 초기화 하거나 이벤트 리스너를 없애는 작업을 함. 이 API 는 v16.3 이후 deprecate. 기존의 기능은 getSnapshotBeforeUpdate 로 대체 함
        console.log('6 componentWillUpdate');
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        console.log('3 render');  // 3 캐시 , 7 , 11
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;