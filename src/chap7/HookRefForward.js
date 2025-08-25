import { useRef, useEffect } from 'react';
import MyTextBox from './MyTextBox';

export default function HookRefForward() {
  const text = useRef(null);

  // 起動時にテキストフィールドへフォーカス
  useEffect(() => {
    text.current?.focus();
  }, []);

  return <MyTextBox label="名前" ref={text} />;
}
