/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const gradientLinearProgress = css`
  height: 40px;
  border-radius: 5px;
  background: linear-gradient(to right, #5155C3, #FF8C00);
  
  & .MuiLinearProgress-bar {
    background: linear-gradient(to right, #FF8C00, #5155C3);
  }
`;
