import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
    id = 2  // 컴포넌트 내부에서 필요한 값 중에서, 렌더링 되는것과 상관이 없는 것들은 굳이 state 에 넣어줄 필요 없음
    state = {
        information: [
            {
                id: 0,
                name: '송민호',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: '피오',
                phone: '010-1111-1111'
            }
        ],
        keyword: ''
    }
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        });
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, ...data })
        })
    }
    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }
    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information: information.map(
                info => id === info.id
                    ? { ...info, ...data }  // 새 객체를 만들어서 기존의 값과 전달받은 data 를 덮어씀
                    : info                  // 기존의 값을 그대로 렌더링
            )
        })
    }
    render(){
        const style = {
            verticalAlign: 'top',
            width: '510px',
            minHeight: '30px',
            marginRight: '10px',
            padding: '5px',
            fontSize: '1.2em',
            boxSizing: 'content-box'
        };
        const { information, keyword } = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
        );
        return (
            <div style={{padding:'20px', color:'green'}}>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                {/* {JSON.stringify(information)} */}
                <p>
                    <input
                        type="text"
                        placeholder="검색 할 이름을 입력하세요"
                        onChange={this.handleChange}
                        value={keyword}
                        style={style}
                    />
                </p>
                <hr />
                <PhoneInfoList
                    data={filteredList}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default App;