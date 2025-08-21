import { useState } from 'react';
import './StateTodo.css';

// Todoの更新をする
// 状態を二つ持つようにするこれはTodoの内容とTodoリストそれぞれの状態を持つもの
// 更新の仕方も少し違うのでそこも考える
// リストの追加にはReactでは、push/unshiftなどは使えない。なので...演算子を使う

let maxId = 0;

export default function StateTodo() {
  const [title, setTitle] = useState(''); // todoの内容
  const [todo, setTodo] = useState([]); // リスト
  const [desc, setDesc] = useState(true); // 最初trueしないとソートボタンを二回押して降順になる

  const handleChangeTitle = (e) => {
    setTitle(e.target.value); // これはそのまま更新関数
  };

  // クリック時にイベントハンドラを使って状態更新をする
  const handleClick = () => {
    // オブジェクトの時と同じ用に、ここで...演算子を使う
    setTodo([
      ...todo,
      {
        id: maxId++,
        title, // ここで状態変数をつかう
        created: new Date(),
        isDone: false,
      },
    ]);
  };

  const handleDone = (e) => {
    setTodo(
      todo.map((item) => {
        if (item.id === Number(e.target.dataset.id)) {
          // 今の要素のidとイベントオブジェクトのidが同じか
          // ここで状態更新をするにはコールバック関数にしているので、戻り値として返すのを忘れないこと
          // 個々の要素を返すので...itemになる
          return {
            ...item,
            isDone: true,
          };
        } else {
          return item;
        }
      })
    );
  };

  // 次は指定要素の削除のイベントハンドラをつくる
  const handleRemove = (e) => {
    setTodo(todo.filter((item) => item.id !== Number(e.target.dataset.id)));
  };

  // イベントハンドラを使ってソートをするその際にソート用の状態変数を作ってその中で変数の真偽値で降順にソートするかを決める
  // そしてソートする基準は、作成日時で決める
  const handleSort = (e) => {
    const sorted = [...todo]; // 分割代入

    sorted.sort((m, n) => {
      // 降順か
      if (desc) {
        return n.created.getTime() - m.created.getTime();
      } else {
        return m.created.getTime() - n.created.getTime();
      }
    });
    setDesc((d) => !d);
    setTodo(sorted); // ソートしたリストを状態更新関数に格納する
  };

  return (
    <div>
      <label>
        やること
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <button type="button" onClick={handleClick}>
        追加
      </button>
      <button type="button" onClick={handleSort}>
        ソート ({desc ? '↑' : '↓'})
      </button>
      {/* Todoをリストに追加 */}
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.isDone ? 'done' : ''}>
            {item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>
              済
            </button>
            <button type="button" onClick={handleRemove} data-id={item.id}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
