import { useState } from 'react';
// selectコンポーネントではvalue値が決まっているのでoption要素でvalueのみにして
// 親要素のselectでid,name,onChange,value属性を書く
// stateはanimal

export default function FormSelect() {
  const [form, setForm] = useState({
    animal: 'god',
  });

  // 選択ボックスの変更時に入力値をstateに反映
  const handleForm = (e) => {
    setForm({
      ...form, // 分割代入
      [e.target.name]: e.target.value,
    });
  };

  // 送信ボタンクリックで入力値をログ出力
  const show = () => {
    console.log(`好きな動物:${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="animal">好きな動物</label>
      <select
        id="animal"
        name="animal"
        value={form.animal}
        onChange={handleForm}
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
