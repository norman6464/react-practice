import { useState } from 'react';

export default function EventCompare() {
  // mouseenter/mouseleaveイベントの情報をresultに反映
  const [result, setResult] = useState('');
  const handleIn = (e) => setResult((r) => `${r}Enter:${e.target.id}<br />`);
  const handleOut = (e) => setResult((r) => `${r}Leave:${e.target.id}<br />`);

  return (
    <>
      <div id="outer" onMouseEnter={handleIn} onMouseLeave={handleOut}>
        外（outer
        <p id="inner">内（inner）</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: result }}></div>
    </>
  );
}
