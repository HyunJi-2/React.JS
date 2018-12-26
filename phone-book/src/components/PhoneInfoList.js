import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        list: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        // console.log('render PhoneInfoList');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (
                <PhoneInfo
                    key={info.id}   // key 는 리액트에서 배열을 렌더링 할때 꼭 필요한 값. 리액트는 배열을 렌더링 할 때 값을 통하여 업데이트 성능을 최적화 함. key 값은 언제나 고유해야함.
                    info={info}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />)
        );
        /*
        데이터에 고유 값이 없을때 key 값을 빼먹으면 렌더링이 되긴 하지만 개발자도구 콘솔에서 경고창이 뜸.
        그 경고가 보고 싶지 않다면 아래와 같이 작업 할수 있음

        const list = data.map(
            (info, index) => (<PhoneInfo key={index} info={info}/>)
        );
        */
        return (
            <div id="phoneInfoList">
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;