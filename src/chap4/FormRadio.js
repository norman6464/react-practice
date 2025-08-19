import { useState } from 'react';

// ラジオボタンのコンポーネントを作っていく
// 使用osをラジオボタンで走査をしていくコンポーネント
// 主にchecked === '' で検査をする
// フォームコンポート全体だが、stateが持つプロパティ（この場合はosプロパティ）よname属性は一緒で得なければならない

export default function FormRadio() {
  const [form, setForm] = useState({
    os: 'windows',
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`使用OS：${form.os}`);
  };

  return (
    <form>
      <fieldset>
        <legend>使用OS：</legend>
        <label htmlFor="os_win">Windows</label>
        <input
          id="os_win"
          name="os"
          type="radio"
          value="windows"
          checked={form.os === 'windows'}
          onChange={handleForm}
        />
        <label htmlFor="os_mac">macOS</label>
        <input
          id="os_mac"
          name="os"
          type="radio"
          value="mac"
          checked={form.os === 'mac'}
          onChange={handleForm}
        />
        <label htmlFor="os_lin">Linux</label>
        <input
          id="os_lin"
          name="os"
          value="linux"
          type="radio"
          checked={form.os === 'linux'}
          onChange={handleForm}
        />
      </fieldset>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
