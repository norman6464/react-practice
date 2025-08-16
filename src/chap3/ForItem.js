import React from 'react';
import Download from './Download';
// Downloadコンポートを<dd>タグの入れ子にしてisbn属性にbooksを入れる
// booksオブジェクトのdownloadプロパティがtrueだった場合にDownloadコンポーネントを入れ子にする

export default function ForItem({ book }) {
  // let dd;
  // if (book.download) {
  //   dd = (
  //     <dd>
  //       {book.summary}
  //       <Download isbn={book.isbn} />
  //     </dd>
  //   );
  // } else {
  //   dd = <dd>{book.summary}</dd>;
  // }

  return (
    // 今回ForNestはkey属性をわたしたのだが、実際にはこれはpropsではない
    // あくまでReactへのヒントとしての利用されるだけ、
    <React.Fragment>
      <dt>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
          {book.title} ({book.price}円)
        </a>
      </dt>
      {/* 生成しておいたタグを埋め込み */}
      {/* 補足としてif分は式ではないのでjsx式に直接埋め込められないなのでさっきのfilterやsortのstatement部分はjsx外で書いていた */}
      {/* {dd} */}
      {/* だが即時関数をつかえば関数の中に直接if分をつかうことができる可読性が上がる */}
      {/* この即時関数はあくまで関数なのでこのjsxに対してreturnをしてReact要素を返さないといけない */}
      {/* 即時関数では(() => {})()の関数を()で囲んでいるから式として認識される。そして末尾の()は呼び出しの意味を持つ */}
      {(() => {
        if (book.download) {
          return (
            <dd>
              {book.summary}
              <Download isbn={book.isbn} />
            </dd>
          );
        } else {
          return <dd>{book.summary}</dd>;
        }
      })()}
    </React.Fragment>
  );
}
