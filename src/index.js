import React from 'react';
import ReactDOM from 'react-dom/client';
import StateNest from './chap4/StateNest';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StateNest />);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
