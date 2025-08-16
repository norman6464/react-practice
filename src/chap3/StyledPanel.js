// このコンポーネントでは要素配下（親コンポーネントが子コンポーネントの値を参照する）
// 主にprops.children プロパティを指定して、親要素の配下コンテンツを取得する
// 今回は子要素でスタイルを指定して、親要素でコンテンツを得る

export default function StyledPanel({ children }) {
  return (
    // {{}} で二つあるのは{}がスタイルを適用させるオブジェクトだから
    <div
      style={{
        margin: 50,
        padding: 20,
        border: '1px solid #000',
        width: 'fit-content',
        boxShadow: '10px 5px 5px #999',
        backgroundColor: '#fff',
      }}
    >
      {children}
    </div>
  );
}
