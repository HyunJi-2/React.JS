import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();     // 페이지 리로딩 방지
        this.props.onCreate(this.state);    // 상태값을 onCreate 를 통하여 부모에게 전달
        this.setState({         // 상태 초기화
            name: '',
            phone: ''
        });
    }
    render(){
        const style = {
            verticalAlign: 'top',
            minWidth: '50px',
            minHeight: '30px',
            marginRight: '10px',
            padding: '5px',
            fontSize: '1.2em',
            boxSizing: 'content-box'
        };
        return (
            <form onSubmit={this.handleSubmit}>
                <input style={style}
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input style={style}
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit" style={style}>등록</button>
                {/* <div>{this.state.name} {this.state.phone}</div> */}
            </form>
        );
    }
}

export default PhoneForm;