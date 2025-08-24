import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import QueryBasic from './chap6/QueryBasic';
import { ErrorBoundary } from 'react-error-boundary';
import QuerySuspense from './chap6/QuerySuspense';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 今回はちゃんとdefaultoptionsで全体のクエリに対してデフォルトの設定を適用させる
// suspense: trueにしてデフォルトでローディングページの表示を設定する

const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

root.render(
  // Suspense/ErrorBoundaryをクエリ全体で囲む
  <Suspense fallback={<p>Loading ....</p>}>
    <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
      <QueryClientProvider client={cli}>
        <QuerySuspense />
      </QueryClientProvider>
    </ErrorBoundary>
  </Suspense>
);

// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
