import React from 'react';
import ReactDOM from 'react-dom/client';
import SuspenseSimple from './chap5/SuspenseSimple';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SuspenseSimple />);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
