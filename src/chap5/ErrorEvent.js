// Error Boundary自他はイベントハンドラ/非同期処理のエラーは確保できない
// そこでイベントハンドラでも適切にエラーハンドリングができるようにする
// useErrorBoundarを取得して
import { useErrorBoundary } from 'react-error-boundary';

export default function ErrorEvent() {
  // const handleClick = () => {
  //   throw new Error('Error is occur in MyApp');
  // };

  // 分割代入をしていてshowBoundary関数だけを取得している
  const { showBoundary } = useErrorBoundary();

  /* useErrorBoundary関数の戻り値
  showBoundary(error): Error Boundリセットしして例外処理情報を引き渡す
  resetBoundary(): Error Boundaryをリセットし、配下のコンポーネントを再描画
  */

  const handleClick = () => {
    try {
      throw new Error('Error is occur in MyApp');
    } catch (e) {
      // ハンドラー内で発生した例外をError Boundaryに引き渡す
      showBoundary(e);
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      エラー発射
    </button>
  );
}
