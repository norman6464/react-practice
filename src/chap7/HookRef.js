// さっきのHookRefNgコンポーネントでは、再描画のたびに変数が違う値を参照をしているので、
// 今回はuseRefを使ってイベントハンドラ間で変数を参照をするように修正をする

// さっきのコンポーネントとロジックは一緒なのでRefオブジェクトのみを考慮する
// コンポーネントが破棄されるまで維持される
// なのでさっきと違うのは再描画のタイミングで変数の参照先は同じRefオブジェクトということ

// Refオブジェクトの値が変更されても再描画はされない

import { useRef, useState } from 'react';

export default function HookRef() {
  let id = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (id.current === null) {
      id.current = setInterval(() => setCount((c) => c + 1), 1000);
    }
  };

  const handleEnd = () => {
    clearInterval(id.current);
    id.current = null;
  };

  return (
    <>
      <button type="button" onClick={handleStart}>
        開始
      </button>
      <button type="button" onClick={handleEnd}>
        終了
      </button>
      <p>{count}秒経過しました。</p>
    </>
  );
}
