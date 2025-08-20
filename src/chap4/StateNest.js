// このコンポーネントでは入れ子の状態で状態を更新する実装になる
// そして入れ子の場合は状態更新関数がその入れ子の深さ分必要になる
// value属性は更新させるために必要な値、そして初期値にも必要になる
// そして各プロパティがname,addressの直下にprefecture,city
// 入れ子自体はあまりコードが冗長になるので、なるべくフラット（階層が一つのプロパティ）にするように

import { useState } from 'react';

export default function StateNest() {
  const [form, setForm] = useState({
    name: '山田太郎',
    address: {
      prefecture: '広島県',
      city: '椿原町',
    },
  });

  // 一段めの要素を更新するためのハンドラー
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormNest = (e) => {
    setForm({
      ...form,
      address: {
        ...form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const show = () =>
    console.log(
      `${form.name} (${form.address.prefecture}・${form.address.city})`
    );

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="prefecture">住所（都道府県）</label>
        <input
          id="prefecture"
          name="prefecture"
          type="text"
          onChange={handleFormNest}
          value={form.address.prefecture}
        />
      </div>
      <div>
        <label htmlFor="city">住所（市町村）</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={handleFormNest}
          value={form.address.city}
        />
      </div>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
