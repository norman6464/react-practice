import React from 'react';
import ReactDOM from 'react-dom/client';
import FormRadio from './chap4/FormRadio';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormRadio />);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
