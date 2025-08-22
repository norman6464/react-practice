// styledの実態はコンポーネントになる。
// なのでこれまでのコンポーネントと同じくPropsを経由してないようを動的に書き換えることも可能になる
import styled from 'styled-components';

// スタイルをpropsで渡したときにはじめて確定する
const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  color: white;
  border-color: ${(props) => (props.theme.radius ? '10PX' : '0px')};
  background-color: ${(props) => props.theme.color};
`;

// ${ props => Propsへのアクセスコード}と覚えておく
export default function StyledProps({ theme }) {
  return (
    <MyPanel
      theme={{
        radius: true,
        color: 'royalblue',
      }}
    >
      <b>Styled JSX</b>は、JSX式にスタイル定義を・・・
    </MyPanel>
  );
}
