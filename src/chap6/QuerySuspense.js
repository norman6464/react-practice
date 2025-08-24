import { useQuery } from '@tanstack/react-query';
// 今回はボイラーコード（複数の箇所でほとんど変化することなく繰り返される、定型的なコード）
// つまり冗長なコードをSuspense/ErrorBoundaryでそれぞれ変えてみる
// 具体的なロジックとしては呼び出し側（index.js）でSuspenseコンポーネントを呼び出して
// 繰り返し扱うであろうローディング中のコンポーネントの呼び出しをクエリ全体で適用させること

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const fetchWeather = async () => {
  await sleep(2000);
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&appid=58411d0400570648d5f914139a68b38f`
  );
  if (res.ok) {
    return res.json();
  }
  return res.statusText;
};

export default function QuerySuspense() {
  // React Query v5 以降は引数がオブジェクト型になる
  // 今回は確認だけなので、主にdataのみ分割代入で取り出せればいい
  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
  });

  // もしもクエリ単位にSuspenseを有効化したいならば、{suspense: true}を引数の中に入れる

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
