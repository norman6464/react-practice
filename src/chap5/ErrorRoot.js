import { ErrorBoundary } from 'react-error-boundary';
import ErrorThrow from './ErrorThrow';

export default function ErrorRoot() {
  return (
    <>
      <h3>Error Boundaryの基本</h3>
      <ErrorBoundary fallback={<p>エラーが発生しました。</p>}>
        <ErrorThrow />
      </ErrorBoundary>
    </>
  );
}
