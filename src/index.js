import ReactDOM from 'react-dom/client';
import HookEffect from './chap7/HookEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HookEffect init={10} />);

// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
