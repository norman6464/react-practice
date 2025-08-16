import React from 'react';
import ReactDOM from 'react-dom/client';
import StateParent from './chap3/StateParent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StateParent />);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
