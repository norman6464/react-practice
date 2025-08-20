import { KingBed } from '@mui/icons-material';
import { useRef } from 'react';

// ファイルコンポーネントに関してはアプリ側から何か処理することは何もないので、
// おもに非制御コンポーネントを使うようにする
// ファイル配置の場合はプロパティがtype,name,sizeプロパティがある
// 非制御コンポーネントではこのようにアプリ側の挙動によって使用するかの判断ができる場合がある
// Refオブジェクトはcurrentプロパティで要素を取得できる
export default function FormFile() {
  // 更新はRef属性に任せる
  const file = useRef(null);

  // 取得したファイル群を順走査
  const show = () => {
    const fs = file.current.files; // Refオブジェクトではcurrentで値を取得し、filesでファイル（複数）を取得する
    // valueプロパティではないので注意する
    for (let f of fs) {
      console.log(`ファイル名：${f.name}`);
      console.log(`種類：${f.type}`);
      console.log(`サイズ：${Math.trunc(f.size / 1024)}KB`);
    }
  };

  return (
    <form>
      <input type="file" ref={file} multiple />
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
