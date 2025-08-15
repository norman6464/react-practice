// ForNestはさっきのForListコンポーネントのリスト全体を管理するメソッドになる
// 先にコンポーネントForItemがあるものとして作っていく

import ForItem from './ForItem';

export default function ForNest({ src }) {
  // リスト全体を管理する
  return (
    <dl>
      {src.map((elem) => (
        // 属性をわたしているけれど、それぞれの値をどう使うかは子コンポーネント側にゆだねられる
        <ForItem book={elem} key={elem.isbn} />
      ))}
    </dl>
  );
}
