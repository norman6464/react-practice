// このコンポーネントではuseRef関数を使って、フォーカスの要素を移動させる
// コールバック関数で変える

// まずuseState関数でshow状態変数で住所をtrue/falseの状態にしてjsx式で表示するかどうかを決める
// そしてuseRef関数でaddress変数をつかい、当該要素とマッピングをして、focus()を呼び出す
// そのロジックをshowを依存配列にしてstatementにfocus関数を呼び出すuseEffect関数を呼び出せばいい

import { Call } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';

export default function HookCallbackRef() {
  const [show, setShow] = useState(false);
  // 住所要素へのマッピングをする
  // const address = useRef(null);

  const handleClick = () => setShow((s) => !s);

  // callback関数として表示を管理するには
  const callbackRef = (elem) => elem?.focus();
  /*コールバック関数
  ref属性に対してREfオブジェクトをわたすのではなく、関数をわたす形になるつまり
  このelemは要素オブジェクトということになる  */

  // useEffect(() => {
  //   if (address.current) {
  //     address.current.focus(); // マッピングをしている要素へのフォーカスをする関数
  //   }
  // }, [show]);
  // showのtrue/falseでフォーカスをするかどうかが変わってくる

  return (
    <>
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <input id="email" type="text" />
        <button type="button" onClick={handleClick}>
          拡張表示
        </button>
      </div>
      {/* State (show) 値に応じて[住所]欄を表示する */}
      {show && (
        <div>
          <label htmlFor="address">住所：</label>
          <input id="address" type="text" ref={callbackRef} />
        </div>
      )}
    </>
  );
}
