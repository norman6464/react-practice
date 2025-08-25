import { forwardRef, useImperativeHandle, useRef } from 'react';

const MyTextBox = forwardRef(({ label }, ref) => {
  // テキストボックスへの参照を準備
  const input = useRef(null);

  // 親コンポーネントに対して公開するオブジェクトを生成
  useImperativeHandle(
    ref,
    () => {
      return {
        // このようにすることでuseImperative関数は親コンポーネント（呼び出し側
        // 各機能に対してできることが限定されているので本来のコンポーネントの目的を遂行しやすくなる
        // そして親コンポーネントでメソッドなどを実装しなくてもよくなる
        focus() {
          input.current.focus();
        },
      };
    },
    []
  );

  return (
    <label>
      {label}:
      <input type="text" size="15" ref={input} />
    </label>
  );
});

export default MyTextBox;

// この子コンポーネントから、親コンポーネントに対してinput要素を介してREfオブジェクトを参照する
// import { forwardRef } from 'react';
// 個々のコンポーネントではreturn文がない空わかりにくいが、暗黙的にreturnしている
// const MyTextBox = forwardRef(
//   (
//     { label },
//     ref // この()でreturnしている
//   ) => (
//     <label>
//       {label}:
//       <input type="text" ref={ref} />
//     </label>
//   )
// );

// export default MyTextBox;
