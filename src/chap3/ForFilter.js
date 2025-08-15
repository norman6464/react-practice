// filterメソッドをつかうことで、3500未満の書籍だけを表示する
// テキストの内容だとエラーが起こるのでprops名をbooksに変えること
// ロジックとしては変数にfilterで絞りこんだ各配列を格納する
// 次にmapメソッドで順次出力をしていく

import React from 'react';

export default function ForFilter({ books }) {
  const lowPrice = books.filter((book) => book.price < 3500);

  return (
    <dl>
      {lowPrice.map((elem) => (
        <React.Fragment key={elem.isbn}>
          <dt>
            <a
              href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
            >
              {elem.title} ({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
