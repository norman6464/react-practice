import { Suspense, lazy } from 'react';

// 遅延コンポーネントをつくり、Suspenseのフォールバックで代替コンテンツ
// を表示する
// そして今回のコンポーネントでは、Lazy関数でコンポーネントを作成し、
// 遅延コンポーネントを通常のコンポーネントのように扱えるようにする

// msミリ秒遅延を発生させるsleep関数
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// LazyButtonを遅延ロードする
// Lazy関数で全体を囲んでそしてPromiseオブジェクトで作ったsleep関数を呼び出すそして処理に成功したらthen関数で動的importをするように
const LazyButton = lazy(() =>
  sleep(2000).then(() => import('./LazyButton.js'))
);

export default function LazyBasic() {
  // LazyButtonの読み込みまでメッセージを表示する
  return (
    <Suspense fallback={<p>Now Loading ...</p>}>
      <LazyButton />
    </Suspense>
  );
}

/*
本来はlazy関数ではわざと遅延をさせなくてもいいので
const LazyButton = lazy(() => import('./LazyButton.js))
でいい
*/
