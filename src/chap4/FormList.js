// 複数の選択ボックス（リストボックス）を持つ場合は、更新関数の使い方が変わってくる。
// 主にイベントオブジェクト（e）の扱いが変わってくる。
// まずはoptionsプロパティで配列を格納させる
// その次に、selectedでtrueだったものを取りだしていく
// 取り出したものを、e.target.name:に格納する
// いつものe.target.valueを選択したら最初の選択値しか取得できないので使わないoptionsで一つ一つ調べて格納していく

import { useState } from 'react';

export default function FormList() {
  const [form, setForm] = useState({
    animal: ['dog', 'hamster'],
  });

  // 選択された状態のときに、この関数が呼び出される
  const handleFormList = (e) => {
    const data = [];

    const opts = e.target.options;
    for (let opt of opts) {
      if (opt.selected) {
        data.push(opt.value); // optそのものを格納するのではなく、valueでプロパティの値のみ格納する
        // じゃないと[e.target.name]:dataでvalueを格納できない
      }
    }

    setForm({
      ...form,
      [e.target.name]: data,
    });
  };

  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="animal">好きな動物：</label>
      <br />
      <select
        id="animal"
        name="animal"
        value={form.animal}
        onChange={handleFormList}
        size="4"
        multiple={true}
      >
        <option value="dog">イヌ</option>
        <option value="cat">ネコ</option>
        <option value="hamster">ハムスター</option>
      </select>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
