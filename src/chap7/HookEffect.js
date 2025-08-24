// このコンポーネントでは、useEffect/useLayoutEffectフックの双方の違いを確かめる
// 主に、実行タイミングが異なる
// useEffectはページが描画された後に非同期で実行されるのに対して
// useLayoutEffect関数はページ描画前に同期で実行される

import { useState, useEffect, useLayoutEffect } from 'react';

// delay秒だけ処理を休止するsleep関数
const sleep = (delay) => {
  // 現在時刻がstart（開始時刻）を超えるまでループを継続
  const start = Date.now();
  while (true) {
    if (Date.now() - start > 1000) {
      break;
    }
  }
};

export default function HookEffect({ init }) {
  const [count, setCount] = useState(0);

  // 2000ミリ秒後にState（count）を設定
  // useEffect(() => {
  //   sleep(2000);
  //   setCount(init);
  // }, []);

  // 今度はuseLayoutEffectフックに置き換えたら最初にこのフックが実行されるので
  // 最初からcountは10と描画される
  useLayoutEffect(() => {
    sleep(2000);
    setCount(init);
  });

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        カウント
      </button>
      <p>{count}回クリックされました。</p>
    </>
  );
}
