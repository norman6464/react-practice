// mouseenter/mouseleaveでのイベント処理をする
// useStateフックでいつも通りイベントに対して状態の更新をする
// 次にpropsではsrc/altとなる属性値を得るそしてmouseの出入りでイベント判定をする
import { useState } from 'react';

export default function EventMouse({ beforeSrc, afterSrc, alt }) {
  // マウスの指定範囲内に入っている場合はafterSrcにcurrentを状態更新する
  const [current, setCurrent] = useState(beforeSrc);
  const handleEnter = () => setCurrent(afterSrc);
  const handleLeave = () => setCurrent(beforeSrc);

  return (
    <img
      src={current}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      alt={alt}
    />
  );
}
