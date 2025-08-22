import styled from 'styled-components';
// 外部の.css.jsファイルでのスタイル定義を再利用するコンポーネント
// css関数で定義をしてexportしたものは名前は何でもいいものになる
import PanelBase from './StyledCommon.css';
const MyPanel = styled.div`
  ${PanelBase}
  width: 300px;
`;
// ${}で利用ができる

export default function StyledCommon() {
  return (
    <MyPanel>
      <b>styled jsx</b>は、JSX式にスタイル定義を埋め込む形式のライブラリです。
    </MyPanel>
  );
}
