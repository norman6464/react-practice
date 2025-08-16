// カウンター全体を管理するコンポーネントになる
// 各ボタンはStateCounterコンポーネントに任せてあたしの処理のロジックを担当する
// 子コンポーネント経由でイベントハンドラの知らせを受け取る
import { useState } from 'react';
import StateCounter from './StateCounter';

export default function StateParent() {
  // カウント合計を表すcountを初期化
  const [count, setCount] = useState(0);

  const update = (step) => setCount((count) => count + step);

  return (
    <>
      {/* update関数をStateCounterコンポーネントに引き渡す */}
      <p>総カウント：{count}</p>
      <StateCounter step={1} onUpdate={update} />
      <StateCounter step={5} onUpdate={update} />
      <StateCounter step={-1} onUpdate={update} />
    </>
  );
}
