// 今まではレンダラーとして属性でfallbackRender属性で同じファイル内で渡していたが、
// 今回はコンポーネントとして渡せるようにfallbackComponent属性経由で渡せるようにコンポーネントをつくっていく

export default function ErrorFallback({ error, resetErrorBoundary }) {
  const handleReset = () => resetErrorBoundary(); // 再試行をするためにErrorBoundaryが管理しているhasErrorをfalseにする
  return (
    <div>
      <h4>以下のエラーが発生しました。</h4>
      <p>{error.message}</p>
      <button type="button" onClick={handleReset}>
        Retry
      </button>
    </div>
  );
}
