import React from 'react';
// children事態は属性で渡すのではなく、親コンポネントの配下のコンテキストである

// export default function ListTemplate({ src, children }) {
//   return (
//     <dl>
//       {src.map((elem) => (
//         // 今までと違うのが親コンポーネントに対して子コンポーネントから情報渡していることになる
//         <React.Fragment key={elem.isbn}>{children(elem)}</React.Fragment>
//       ))}
//     </dl>
//   );
// }

// レンダープロップ問とはprops自体がデータなどではなく、びょうがのもととなる属性のこと
// レンダープロップで渡す。属性として渡す
export default function ListTemplate({ src, render }) {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>{render(elem)}</React.Fragment>
      ))}
    </dl>
  );
}
