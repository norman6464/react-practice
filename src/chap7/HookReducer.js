// useReducer関数は、dispatch関数でuseReduceが実装した処理を呼び出せることができて、そして
// Actionという処理ロジックで引数にtypeをわたしてswitch文を渡すことができる
// typeプロパティとcountプロパティを使うことを忘れない

import { useReducer } from 'react';

export default function HookReducer({ init }) {
  const [state, dispatch] = useReducer(
    // Reducer関数
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + 1 };
        default:
          return state;
      }
    },
    // state値の初期値（見にくいけど第二引数）
    {
      count: init,
    }
  );

  // Reducer経由でStateを更新する
  const handleClick = () => {
    dispatch({ type: 'update' });
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        カウント
      </button>
      <p>{state.count}回クリックされました。</p>
    </>
  );
}
