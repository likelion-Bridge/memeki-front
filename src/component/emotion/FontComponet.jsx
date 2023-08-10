/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import theme from '../../styles/theme';

export const Title = ({ children, style }) => (
  <div
    css={css`
      ${theme.typography.title};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Header1 = ({ children, style }) => (
  <div
    css={css`
      ${theme.typography.header1};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Header2 = ({ children, style }) => (
  <div
    css={css`
      ${theme.typography.header2};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Body1 = ({ children, style }) => (
  <div
    css={css`
      ${theme.typography.body1};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Body1Bold = ({ children, style }) => (
  <div
    css={css`
      ${theme.typography.body1Bold};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Body2 = ({ children, style }) => (
  <div
    css={css`
      ${theme.typography.body2};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Body2Bold = ({ children, style }) => (
  <div
    css={css`
      ${theme.typography.body2Bold};
      ${style};
    `}
  >
    {children}
  </div>
);
export const Section = ({ children, gap }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: ${gap}rem;
    `}
  >
    {children}
  </div>
);

Section.defaultProps = {
  gap: 0,
};
