import { useEffect, useState } from 'react';

// delay秒だけ処理を休止するsleep関数
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

// いままでのコードと違い、return配下の各要素へのレンダリングを出力するのではなく、
// useEffectで状態が変わった場合にfetch.jsonの取得

// 天気情報を取得するための関数
const fetchWeather = async () => {
  // 処理を遅延させるダミーの休止処理
  await sleep(2000);
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=58411d0400570648d5f914139a68b38f`
  );
  if (res.ok) {
    return res.json();
  }
  // エラー時はその内容をスロー
  throw new Error(res.statusText);
};

export default function QueryPre({ id }) {
  // 天気予報（info）、loading（ロード中か?）、error（エラー情報）を準備
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true); // 必ず最初は処理中だから
  const [error, setError] = useState('');

  // コンポーネント起動時に天気予報を取得
  useEffect(() => {
    fetchWeather()
      .then((result) => setData(result))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  // ロード中であれば、ローディングメッセージを表示する
  if (isLoading) {
    return <p>Loading ....</p>;
  }

  // 通信エラーが発生した場合には、エラーメッセージを表示
  if (error) {
    return <p>Error: {error}</p>;
  }

  // ロード中でもエラー中でもない場合に、結果を表示する
  // fetchをして得たデータをimg要素src属性alt属性に対して適用をしている
  // なのでdataがres.json()オブジェクトが取得できるかわからないので?.演算子を使っている
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
