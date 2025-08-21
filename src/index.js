import React from 'react';
import ReactDOM from 'react-dom/client';
import SuspenseResult from './chap5/SuspenseResult';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SuspenseResult />);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
