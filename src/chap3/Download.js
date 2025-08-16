import dl_icon from '../image/dl.png';
// このコンポーネントはbooksオブジェクトでdownloadプロパティがtrueだった場合に表示する
export default function Download({ isbn }) {
  return (
    <a href={`https://wings.msn.to/index.php/-/A-07/${isbn}/`}>
      <img src={dl_icon} alt="Sample Download" />
    </a>
  );
}
