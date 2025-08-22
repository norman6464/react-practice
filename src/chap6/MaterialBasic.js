/** jsxImportSource @emotion/react */
import { Button } from '@mui/material';
import { css } from '@emotion/react';
export default function MaterialBasic() {
  // テキストの大文字/小文字変換を無効化
  const font = css`
    text-transform: none;
  `;
  return (
    <>
      <Button variant="text" css={font}>
        Text
      </Button>
      <Button variant="contained" css={font}>
        Contained
      </Button>
      {/* 最期だけ大文字だけか調べる */}
      <Button variant="outlined">Outlined</Button>
    </>
  );
}
/*
MUIは今後はあまり使わないのでReactフックを中心に学ぶ
*/
