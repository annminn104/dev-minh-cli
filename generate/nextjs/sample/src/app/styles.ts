'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    color: ${theme.colors.red};
  `}
`;
