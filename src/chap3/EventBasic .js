export default function EventBasic({ type }) {
  // { type }となっていて中【】になっているのは分割代入をしているから

  // clickイベントハンドラー
  const current = () => {
    const d = new Date();

    // type属性に応じて現在日時をログ出力
    switch (type) {
      case 'date':
        console.log(d.toLocaleDateString());
        break;
      case 'time':
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleString());
        break;
    }
  };

  return (
    <div>
      {/* ボタンクリック時にcurrent関数を呼び出す */}
      <button onClick={current}>現在日時を取得</button>
    </div>
  );
}
