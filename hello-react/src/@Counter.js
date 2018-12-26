import React, { Component } from 'react';

class Counter extends Component {
    // state 정의 - 방법1 : class fields
    state = {
       number: 0
    }
    // state 정의 - 방법2 : constructor
    // constructor(props) {
    //    super(props);  // 호출 한 이유는, 우리가 컴포넌트를 만들게 되면서, Component 를 상속했으며, 우리가 이렇게 constructor 를 작성하게 되면 기존의 클래스 생성자를 덮어쓰게 됩니다. 그렇기에, 리액트 컴포넌트가 지니고있던 생성자를 super 를 통하여 미리 실행하고, 그 다음에 우리가 할 작업 (state 설정) 을 해주는 것
    //     this.state = {
    //         number: 0
    //     }
    // }
    // 두개 같이 사용하게 되면 class fields 가 먼저 실행 되고, 그 다음에 constructor 에서 설정 된 것이 나옴


    // 메소드 작성 - 방법1
    handleIncrease = () => {
        // 함수 작성 - 방법 1
        // this.setState({
        //     number: this.state.number + 1
        // });

        // 함수 작성 - 방법 2. setState 에 객체 대신 함수를 전달하기
        // this.setState(
        //     (state) => ({   // updater 함수를 만들어서 setState 에 전달해줌
        //         number: state.number + 1
        //     })
        // );

        // 함수 작성 - 방법 3
        this.setState(
            ({number}) => ({    // '비구조화 할당'이라는 문법. const { number } = this.state; << 이렇게 사용할 수도 있음
                number: number + 1
            })
        )
    };
    handleDecrease = () => {
        // 함수 작성 - 방법 4
        const {number} = this.state;
        this.setState({
            number: number - 1
        })
    };
    // 메소드 작성 - 방법2
    // handleIncrease(){
    //     this.setState({
    //         number: this.state.number + 1
    //     });
    // }
    //
    // handleDecrease(){
    //     this.setState({
    //         number: this.state.number - 1
    //     });
    // }
    // 위의 코드만 작성할 경우 나중에 버튼에서 클릭 이벤트가 발생 했을때, this 가 undefined 로 나타나서 제대로 처리가 되지 않음. 이는 함수가 버튼의 클릭 이벤트로 전달이 되는 과정에서 "this"와의 연결을 끊겨버리기 때문인데, 이것을 고쳐주려면 constructor 에서 아래 코드처럼 해주거나 우리가 이전에 작성한 코드처럼 아예 화살표 함수 형태로 하면 됨
    // constructor(props) {
    //     super(props);
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }


    // 각 메소드에 들어있는 this.setState 은
    // state 에 있는 값을 바꾸기 위해서는 this.setState 를 무조건 거쳐 가야 함. 리액트에서는 이 함수가 호출되면 컴포넌트가 리렌더링 되도록 설계 되어있음.
    // setState 는 객체로 전달되는 값만 업데이트를 해줌.
    // state = {
    //     number: 0,
    //     foo: 'bar'
    // }
    // 위의 코드에
    // this.setState({number: 1}); 하게 되면 foo 는 그대로 남고 number 값만 업데이트가 됨

    // state = {
    //     number: 0,
    //     foo: {
    //         bar: 0,
    //         foobar: 1
    //     }
    // }
    // setState 는 객체의 깊숙한 곳까지 확인하지 못해서 foo 안의 foobar 를 변경하려면
    // this.setState({
    //     number: 0,
    //     foo: {
    //         ...this.state.foo,   기존 객체 안에 있는 내용을 해당 위치에 풀어준다는 의미
    //         foobar: 2
    //     }
    // });

    render() {
        return (
            <div>
                <h2>카운터</h2>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease} className="btn">+</button>    {/* 이벤트 이름은 camelCase 로 설정 해야함 */}
                <button onClick={this.handleDecrease} className="btn">-</button>    {/* 이벤트에 전달해주는 값은 함수여야 함. ex: onClick={this.handleIncrease()} 이렇게 작성하면 렌더링을 할때마다 해당 함수가 호출이 됨. 렌더링 -> 함수호출 -> setState -> 렌더링 -> 함수호출 -> ... 무한반복됨 */}
            </div>
        );
    };
}

export default Counter;