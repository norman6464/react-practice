import { useState } from 'react';
import { createPortal } from 'react-dom';
import './PortalBasic.css';
// ポータルを使ってダイアログの開閉状態をつくる
// そしてポータルの状態がtrueの場合は、表示をさせる

export default function PortalBasic() {
  const [show, setShow] = useState(false);

  const handleDialog = () => setShow((s) => !s);

  return (
    <form>
      <button type="button" onClick={handleDialog} disabled={show}>
        ダイアログを表示
      </button>
      {/* &&演算子はtrueの場合に表示される */}
      {show &&
        createPortal(
          <div className="dialog">
            <p>Portalで生成されたダイアログ</p>
            <button type="button" onClick={handleDialog}>
              閉じる
            </button>
          </div>,
          document.getElementById('dialog')
        )}
    </form>
  );
}
