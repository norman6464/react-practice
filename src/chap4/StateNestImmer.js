import { useImmer } from 'use-immer';

// Immerライブラリの使用をする
// 使い方はuseStateをそれほどかわらないが、状態更新関数で使い方がかわる

export default function StateNestImmer() {
  const [form, setForm] = useImmer({
    name: '山田太郎',
    address: {
      prefecture: '広島県',
      city: '椿原町',
    },
  });

  // useImmer関数での更新関数では、引数にStateを受け取り、関数配下ではStateを更新できる
  // 一段目の要素を更新するためのハンドラー
  // なのでこの場合は引数formがStateであり、その値は引き続き保ったままにして[]プロパティで動的に変化があったプロパティを更新して代入するという形になる
  const handleForm = (e) => {
    setForm((form) => {
      form[e.target.name] = e.target.value;
    });
  };

  // 二段目の要素を更新するためのハンドラー
  // さっきと違うのが[]プロパティで主にaddressプロパティ配下を対象にしていること
  const handleFormNest = (e) => {
    setForm((form) => {
      form.address[e.target.name] = e.target.value;
    });
  };

  const show = () =>
    console.log(
      `${form.name}(${form.address.prefecture}・${form.address.city})`
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
