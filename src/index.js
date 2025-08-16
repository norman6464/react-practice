import React from 'react';
import ReactDOM from 'react-dom/client';
import SelectStyle from './chap3/SelectStyle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SelectStyle mode="light" />);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
