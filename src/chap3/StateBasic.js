import { useState } from 'react';
// { init }はPropsの分割代入
export default function StateBasic({ init }) {
  // Props（init）でState（count）を初期化
  const [count, setCount] = useState(init);

  // カウンタボタンクリック時にState値をインクリメントをする
  const handleClick = () => {
    setCount(() => count + 1);
    // テンプレート文字列にして変数を${}内に入れて展開する
    console.log(`count is ${count}`);
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました。</p>
    </>
  );
}
