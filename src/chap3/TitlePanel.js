// このコンポーネントはchild事態をまとめて渡すのではなく、
// 各要素（分割したい要素）を一つずつ引数にpropsとして渡すもの

// export default function TitlePanel({ title, body }) {

export default function TitlePanel({ children }) {
  // key属性がtitle/bodyである要素を取得する
  // childrenはjsx配列名なのでfindメソッド
  // 指定されたコールバック関数がtrueを返す要素を取得するためのメソッド
  // この実装でのメリットは親コンポーネントでchildrenの要素にkey属性のみ追加する形になるのでコードの冗長性がない

  const title = children.find((elem) => elem.key === 'title');
  const body = children.find((elem) => elem.key === 'body');

  return (
    <div
      style={{
        margin: 50,
        padding: 5,
        border: '1px solid #000',
        width: 'fit-content',
        boxShadow: '10px 5px 5px #999',
        backgroundColor: '#fff',
      }}
    >
      {/* 各要素にjsxの中に書く */}
      {title}
      <hr />
      {body}
    </div>
  );
}
