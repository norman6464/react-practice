// このコンポーネントは複数チェックボックスでの選択状態を確かめる
// 複数選択をするので主に配列をつかうのとチェック解除を解きに配列のsplice関数とindexOf関数を使う
// 複数選択状態にするためにはまず初期化関数と更新関数で配列を作るというのを抑えておく

import { useState } from 'react';

export default function FormCheckMulti() {
  const [form, setForm] = useState({
    animal: ['dog', 'hamster'],
  });

  const handleFormMulti = (e) => {
    let fa = form.animal;
    // チェック時は配列に値を追加、チェック解除時は削除
    // イベント処理なので変更時ということ、つまりチェックから外されたときもこのイベントハンドラ関数は実行される
    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value));
    }

    setForm({
      ...form,
      [e.target.name]: fa,
    });
  };

  const show = () => console.log(`好きな動物：${form.animal}`);

  return (
    <form>
      <fieldset>
        <legend>好きな動物：</legend>
        <label htmlFor="animal_dog">イヌ</label>
        <input
          id="animal_dog"
          name="animal"
          value="dog"
          type="checkbox"
          checked={form.animal.includes('dog')}
          onChange={handleFormMulti}
        />
        <br />
        <label htmlFor="animal_hamster">ハムスター</label>
        <input
          id="animal_hamster"
          name="animal"
          value="hamster"
          type="checkbox"
          checked={form.animal.includes('hamster')}
          onChange={handleFormMulti}
        />
        <br />
      </fieldset>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
