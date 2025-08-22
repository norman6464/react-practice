/** jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { css, Global } from '@emotion/react';
import EmotionJsx from './chap5/EmotionJsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const global = css`
  body {
    background-color: Yellow;
  }
`;

root.render(
  <>
    <Global style={global} />
    <EmotionJsx />
  </>
);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
