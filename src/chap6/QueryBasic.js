// ここではさっきのuseState/useEffectなどで非同期処理/fetchの結果を管理していたコンポーネントを
// React Queryを使って簡易的にする
import { useQuery } from '@tanstack/react-query';
// useQueryもフックなので分割代入が使える

// delayだけ処理をキュしするsleep関数
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const fetchWeather = async () => {
  // 処理を遅延させるダミーの休止処理
  await sleep(2000);
  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?
    q=Tokyo&lang=ja&appid=58411d0400570648d5f914139a68b38f`);

  // 正常に終了したら、まずはボディ部分をjsonに変換する
  if (res.ok) {
    return res.json();
  }
  // エラーの場合はステータスコードを出力
  throw new Error(res.statusText);
};

export default function QueryBasic() {
  // fetchWeather関数でデータを取得
  const { data, isLoading, isError, error } = useQuery('weather', fetchWeather);
  // ロード中であれば、ローディングメッセージを出力
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  // 通信エラーが発生した場合は、エラーメッセージを出力
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  // ロード中でもエラーでもない場合に、結果を表示する
  return (
    <figure>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
        alt={data?.weather?.[0]?.main}
      />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  );
}
