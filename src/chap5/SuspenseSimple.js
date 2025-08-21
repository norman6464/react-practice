import { Suspense } from 'react';
import ThrowPromise from './ThrowPromise';

export default function SuspenseSimple() {
  return (
    <Suspense fallback={<p>Now Loading...</p>}>
      {/* 個々では要素（コンポーネント）の遅延ロードではなく、
      データのPromise事態をthrowをしている */}
      <ThrowPromise />
    </Suspense>
  );
}
// 子要素から投げられたPromiseを補足するとフォールバック（代替コンテンツ）を表示する
// コンポーネント
