import { useState } from 'react';

//  フォームのコンポーネントになる
// フォームのコンポーネントにはuseStateが必要になる主にこのコンポーネントでは分割代入を使用して
// 更新というか再代入の形をとって値の更新をするそのさいスプレッド構文をつかう
// e.target.value,e.target.nameを使って差分の値の更新する
// つまりイベントハンドラーの中にsetForm関数（状態更新関数）を使う
//  各要素にはonChange属性を使って変化した際にこのイベントハンドラの関数が実行されるようにする
export default function StateForm() {
  const [form, setForm] = useState({
    name: '山田太郎',
    age: 18,
  });

  // フォーム要素の変更をStateに反映
  const handleForm = (e) => {
    setForm({
      ...form, // この分割代入ではここのformを個々の要素に分割しなさいという意味である
      // このイベントeでプロパティ名値を決めることを算出プロパティという
      [e.target.name]: e.target.value,
    });
  };

  // このコードをあえて冗長に書いたら
  /*
    setForm({
      name: form.name,
      age: form.age
      [e.target.name]:e.target.value
    });
    */

  return (
    <form>
      <div>
        {/* State値を個々のフォーム要素に割り当て */}
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
        <label htmlFor="age">年齢：</label>
        <input
          id="age"
          name="age"
          type="number"
          onChange={handleForm}
          value={form.age}
        />
      </div>
      <p>
        こんにちは、{form.name} ({form.age}歳)さん。
      </p>
    </form>
  );
}
