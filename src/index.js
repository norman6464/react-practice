import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import QueryBasic from './chap6/QueryBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
const cli = new QueryClient();
root.render(
  <>
    <QueryClientProvider client={cli}>
      <QueryBasic />
    </QueryClientProvider>
  </>
);
// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
