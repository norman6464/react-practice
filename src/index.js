import React from 'react';
import ReactDOM from 'react-dom/client';
import EventObj from './chap3/EventObj';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EventObj />);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
