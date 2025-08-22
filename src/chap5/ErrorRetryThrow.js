export default function ErrorRetryThrow() {
  // 60%の確率でエラーをスローする
  if (Math.random() < 0.6) {
    throw new Error('Error is occur in MyApp');
  }
  return <p>正しく表示されました。</p>;
}
