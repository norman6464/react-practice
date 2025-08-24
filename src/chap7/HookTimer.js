import { useState, useEffect } from 'react';
import './HookTimer.css';

export default function HookTimer({ init }) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);

    // コンポーネントは破棄時の処理はreturnで返す
    return () => {
      clearInterval(t);
    };
  });

  return (
    // カウンターが0未満になった場合、スタイルを適用する
    <div className={count < 0 ? 'warn' : ''}>現在のカウント:{count}</div>
  );
}
