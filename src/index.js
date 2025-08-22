import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './chap5/StyledGlobal';
import StyledComp from './chap5/StyledComp';
const root = ReactDOM.createRoot(document.getElementById('root'));

// styled-componentを使用したものと通常のボタンを比べている
root.render(
  <>
    <GlobalStyle />
    <StyledComp />
  </>
);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
