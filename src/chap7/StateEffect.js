// コンポーネントの描画/破棄時に処理を実行する-副作用コンポーネント
// useEffect自体は扱う場面が限られてくる
// 主に外部からのデータ取得、React以外のアプリで管理された領域との同期
// そしてブラウザーAPI、文書ツリー（DOM）へのアクセスを伴う操作
// useEffectフックはprops/stateの変更で実行される

// このコンポーネントでは、countで状態更新をしていたコンポーネントに対して
// count(状態変数)が変化した場合でuseEffectフックを使っていく
import { useState, useEffect } from 'react';

export default function StateEffect() {
  const [count, setCount] = useState(0);
  const [hoge, setHoge] = useState('hoge'); // useEffectフックを使って、タイムスタンプを取得する

  // countに変化があったら実行する
  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);

  const handleClick = () => setCount((c) => c + 1);

  return (
    <>
      {/* ボタンにタイムスタンプ値を反映 */}
      {/* さっきのままでは即時関数になっていたので、そこを() => アロー関数として定義する */}
      <button type="button" onClick={() => setHoge(() => Date.now())}>
        Hoge: ({hoge})
      </button>
      <button type="button" onClick={handleClick}>
        カウント
      </button>
      <p>{count}回クリックしました。</p>
    </>
  );
}
