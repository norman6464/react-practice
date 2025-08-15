import React from 'react';

export default function ForItem({ book }) {
  return (
    // 今回ForNestはkey属性をわたしたのだが、実際にはこれはpropsではない
    // あくまでReactへのヒントとしての利用されるだけ、
    <React.Fragment>
      <dt>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
          {book.title} ({book.price}円)
        </a>
      </dt>
      <dd>{book.summary}</dd>
    </React.Fragment>
  );
}
