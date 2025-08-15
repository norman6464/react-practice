import React from 'react';

// 書籍情報はProps（src）経由で受け取る
export default function ForList({ src }) {
  return (
    //  書籍情報を一つ一つ取り出す
    <dl>
      {src.map((elem, index) => (
        // ここでisbnをkey属性として一意に特定できればいい
        // mapメソッドの引数indexでもいいができれば自作で一位に特定できるものがより良い
        <React.Fragment key={index}>
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
