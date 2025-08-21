// 複数の遅延コンポーネントがSuspenseの対象だった場合、
// すべての遅延コンポーネントが出力したらSuspense配下の表示がされる
import { Suspense, lazy } from 'react';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 複数コンポーネントを遅延ロード
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
const LazyButton2 = lazy(() => sleep(2000).then(() => import('./LazyButton2')));

export default function LazyMulti() {
  return (
    <Suspense fallback={<p>Now Loading...</p>}>
      <LazyButton />
      <LazyButton2 />
    </Suspense>
  );
}
