import { useState } from 'react';
// テキストエリアも同様にしてuseStateで管理をする
// 更新も同じでスプレッド構文でえ分割代入をする、そのあとに差分をeオブジェクトで更新をする
// さっき間違えた[]の付け忘れにも注意する

export default function FormTextarea() {
  const [form, setForm] = useState({
    comment: 'さまざまなフォーム要素を....',
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => console.log(`コメント：${form.comment}`);

  return (
    <form>
      <div>
        <label htmlFor="comment">コメント：</label>
        <br />
        <textarea
          id="comment"
          name="comment"
          cols="30"
          rows="7"
          value={form.comment}
          onChange={handleForm}
        ></textarea>
        <br />
      </div>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
