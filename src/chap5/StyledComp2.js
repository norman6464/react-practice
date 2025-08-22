import styled from 'styled-components';
// 標準的なHTMLタグだけではなく、既存のコンポーネントに対してスタイル付けすることも可能になる

// <button>要素を生成するMyButtonコンポーネント
// コンポーネントがstyled-componentに対応するには、PropsとしてclassNameを受け取り、
// これを配下の要素に適用するだけになる。
// 後はstyledオブジェクトに()内にコンポーネントをはめればいい
export function MyButton({ className, children }) {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

// MyButtonにスタイル付けをしたMyStyledButtonを定義
export const MyStyledButton = styled(MyButton)`
  display: block;
  background-color: royalblue;
  color: white;
  font-weight: bold;
  width: 80px;
  height: 50px;
`;
