import React, { Component } from 'react';

const Problemtic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
        <div>

        </div>
    );
}

class CounterError extends Component {
    state = {
        number: 0,
        error: false
    }

    handleIncrease = () => {
        const {number} = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({number}) => ({
                number: number - 1
            })
        );
    }

    componentDidCatch(error, info){
        this.setState({
            error: true
        });
    }

    render() {
        if(this.state.error) return (<h1>에러발생!</h1>);
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                { this.state.number === 4 && <Problemtic /> }
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default CounterError;