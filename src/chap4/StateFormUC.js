import { useRef } from 'react';

// このコンポーネントはさっきのStateを使った制御コンポーネントではなく、
// 非制御コンポーネントと呼ばれるuseRefフックをつかったものになる
// 制御コンポーネントと違うのは、描画のタイミングであり、onChangeごとに変更が変えられる（再描画される）
// 制御コンポーネントと違い、非制御コンポーネントはレンダリングがないので非Reactな仕組みからもアクセスが可能になる

export default function StateFormUC() {
  // 基本的にフォーム要素からのアクセスをするので初期値はnullにする
  const name = useRef(null);
  const age = useRef(null);

  const show = () =>
    console.log(
      `こんにちは、${name.current.value}(${age.current.value}歳)さん！`
    );

  // フォーム描画
  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          name="name"
          type="text"
          ref={name}
          defaultValue="佐藤理央"
        />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input id="age" name="age" type="number" ref={age} defaultValue="18" />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
    </form>
  );
}
