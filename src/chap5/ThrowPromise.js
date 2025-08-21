// ここでPromiseオブジェクトを使って非同期でコンポーネント表示をする
let flag = false;

export default function ThrowPromise() {
  if (flag) {
    return <p>正しく表示できました</p>;
  }

  // ロード中の場合（PromiseがPendingの場合）Promiseをスローする
  throw new Promise((resolve, reject) => {
    setTimeout(() => {
      flag = true;
      resolve('Success');
    }, 3000);
  });
}
