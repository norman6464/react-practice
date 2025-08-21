import React from 'react';
import ReactDOM from 'react-dom/client';
import StateTodo from './chap4/StateTodo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StateTodo />);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
