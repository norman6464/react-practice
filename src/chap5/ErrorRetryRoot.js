// Error BoundaryコンポーネントのフォールバックUIを詳細に定義をしたい場合などに考える
// まずフォールバック関数をつくる
// その中でその関数の引数でerror,resetErrorBoundaryを定義する
// この二つに対応する関数の内容（イベントハンドラ関数）をつくる

import { ErrorBoundary } from 'react-error-boundary';
import ErrorRetryThrow from './ErrorRetryThrow';
import ErrorFallback from './ErrorFallback';

export default function ErrorRetryRoot() {
  //   // エラー時に実行される処理
  //   // おそらくフォールバック関数の引数は規定値となっている
  //   const handleFallback = ({ error, resetErrorBoundary }) => {
  //     const handleClick = () => resetErrorBoundary(); // 再試行をするイベントハンドラ
  //     return (
  //       <div>
  //         <h4>以下のエラーが発生しました。</h4>
  //         <p>{error.message}</p>
  //         <button type="button" onClick={handleClick}>
  //           Retry
  //           {/* ここで再試行イベントハンドラを実行するボタンを表示する */}
  //         </button>
  //       </div>
  //     );
  //   };

  // 本来はエラーの原因となったリソースを初期化するために用いる
  const handleReset = () => console.log('Retry');

  return (
    <>
      <h3>Error Boundaryの基本</h3>
      <ErrorBoundary
        onReset={handleReset}
        // fallbackRender属性でフォールバック関数を表示をさせる
        // fallbackRender={handleFallback}
        FallbackComponent={ErrorFallback}
      >
        <ErrorRetryThrow />
      </ErrorBoundary>
    </>
  );
}
