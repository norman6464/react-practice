// このコード自体はさっきのErrorRetryRootとほとんど一緒だが
// イベントハンドラでの例外のキャッチはできないことを確認するためのコンポーネントになる

import { ErrorBoundary } from 'react-error-boundary';
import ErrorEvent from './ErrorEvent';

export default function ErrorEventRoot() {
  // ここもさっきと一緒になる
  const handleFollback = ({ error, retryErrorBoundary }) => {
    const handleClick = () => retryErrorBoundary();
    return (
      <div>
        <h4>以下のエラーが発生しました。</h4>
        <p>{error.message}</p>
        <button type="button" onClick={handleClick}>
          Retry
        </button>
      </div>
    );
  };

  const handleReset = () => console.log('Reset');

  return (
    <>
      <ErrorBoundary onReset={handleReset} fallbackRender={handleFollback}>
        <ErrorEvent />
      </ErrorBoundary>
    </>
  );
}
