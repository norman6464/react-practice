import React from 'react';
import ReactDOM from 'react-dom/client';
import MaterialBasic from './chap6/MaterialBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MaterialBasic />
  </>
);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
