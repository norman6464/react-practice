import './SelectStyle.css';
import cn from 'classnames';
// mode属性に応じて適用するスタイルを変更する

export default function SelectStyle({ mode }) {
  // あくまでプロパティは文字列で挿入するので''は必要
  // 即時関数のときも説明したが、あくまでショートカット演算子の中じゃないとjsx式の中では条件ん分岐はできない
  return (
    // <div className={`box ${mode === 'light' ? 'light' : 'dark'}`}>
    //   {/* 最終的にclassName属性の値としては'box light'か'box dark'になるようにできている */}
    //   こんにちは、世界！
    // </div>

    // 次はclassnamesライブラリを使った書き方
    // <div className={cn('box', mode === 'light' ? 'light' : 'dark')}>
    //   こんにちは、世界！
    // </div>

    // 次はオブジェクトと文字列を混合させた記述
    // スタイル名：boolean値として適用させるスタイルをわかりやすく指定する
    // <div
    //   className={cn('box', {
    //     light: mode === 'light',
    //     dark: mode === 'dark',
    //   })}
    // >
    //   こんにちは、世界！
    // </div>

    // 次は文字列/配列/オブジェクトの混在も可能になる
    // この場合、box panel light/box panel darkのいずれかになる
    <div
      className={cn('box', [
        'panel',
        {
          light: mode === 'light',
          dark: mode === 'dark',
        },
      ])}
    >
      こんにちは、世界！
    </div>
  );
}
