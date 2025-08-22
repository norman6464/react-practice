// styled Componentsは要素に対してスタイル付けをする

import styled from 'styled-components';

// styledオブジェクトをつけたスタイル自体がコンポーネントとして組み込めるようになる
const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: royalblue;
  color: white;
`;
export default function StyledComp() {
  return (
    <MyPanel>
      <p>Styled JSX</p>は、JSX式にスタイル定義を...
    </MyPanel>
  );
}
