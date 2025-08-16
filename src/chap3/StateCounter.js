export default function StateCounter({ step, onUpdate }) {
  // 引数stepは増分、減算値、onUpdate自体は親コンポーネントにイベントの通知をする
  const handleUpdate = () => onUpdate(step);
  // このコード自体はonUpdate()で親コンポーネントで定義したイベントハンドラの関数を実行している

  return (
    // ボタンの描画
    <button onClick={handleUpdate}>
      <span>{step}</span>
    </button>
  );
}
