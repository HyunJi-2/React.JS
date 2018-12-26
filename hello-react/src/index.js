import React from 'react';          // 렌더링 할 결과물
import ReactDOM from 'react-dom';   // 컴포넌트를 어떤 DOM에 그릴지 정함
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
