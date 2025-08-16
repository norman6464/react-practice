import { useState } from 'react';
// { init }はPropsの分割代入
export default function StateBasic({ init }) {
  // Props（init）でState（count）を初期化
  const [count, setCount] = useState(init);

  // カウンタボタンクリック時にState値をインクリメントをする
  const handleClick = () => {
    // setCount(() => count + 1);
    // Stateを更新されるのは非同期で主にイベントハンドラーで処理終了時にしか更新されない
    // setCount(count + 1);
    // setCount(count + 1);

    // なのでsetState(state => statement)という風にすれば現在の値を
    // 参照して値のインクリメントが行われる
    setCount((count) => count + 1);
    setCount((count) => count + 1);

    // // テンプレート文字列にして変数を${}内に入れて展開する
    console.log(`count is ${count}`);
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました。</p>
    </>
  );
}
