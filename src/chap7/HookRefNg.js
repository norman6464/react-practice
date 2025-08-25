// useRefフックについて学ぶ
// 主にこのフック自体はあまり使わないほうがいい。
// 使うとしたら要素へのフォーカス/スクロール/アニメーション操作のような再描画する必要のないものに対して
// 使うべき
// コンポーネントが生成されてから破棄されるまで維持される、変更可能なオブジェクト
// このコードはuseRefを使用しない場合
// このコンポーネントはsetInterval関数を使って状態の変化を見るコンポーネント

import { useState } from 'react';

export default function HookRefNg() {
  // タイマーのオン/オフを管理するための変数
  let id = null;

  const [count, setCount] = useState(0);

  // 開始ボタンでタイマーを生成
  const handleStart = () => {
    // idは開始ボタンを一回押したら一度だけ実行される
    if (id === null) {
      // １秒間に一回setInterval関数が実行される
      id = setInterval(() => setCount((c) => c + 1), 1000);
    }
  };

  // 終了ボタンでタイマーを破棄
  const handleEnd = () => {
    // これでidの値はnullになりまた最初から
    clearInterval(id);
  };

  return (
    <>
      <button type="button" onClick={handleStart}>
        開始
      </button>
      <button type="button" onClick={handleEnd}>
        終了
      </button>
      <p>{count}秒経過</p>
    </>
  );
}
