import ReactDOM from 'react-dom/client';
import HookReducer from './chap7/HookReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HookReducer init={0} />);

// React（web pack）ではコードの変更が生まれたらファイル名の末尾に付けるハッシュ値が変わるのでホットリロードになる
// const root = ReactDOM.createRoot(document.getElementById('root'));
