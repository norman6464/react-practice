/** jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorEventRoot from './chap5/ErrorEventRoot';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <ErrorEventRoot />
  </>
);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
