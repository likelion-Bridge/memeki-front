/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import theme from '../../styles/theme';

export const Title = ({ children, style }) => (
  <div
    css={css`
      ${theme.textVariants.title};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Header1 = ({ children, style }) => (
  <div
    css={css`
      ${theme.textVariants.header1};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Header2 = ({ children, style }) => (
  <div
    css={css`
      ${theme.textVariants.header2};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Body1 = ({ children, style }) => (
  <div
    css={css`
      ${theme.textVariants.body1};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Body1Bold = ({ children, style }) => (
  <div
    css={css`
      ${theme.textVariants.body1Bold};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Body2 = ({ children, style }) => (
  <div
    css={css`
      ${theme.textVariants.body2};
      ${style};
    `}
  >
    {children}
  </div>
);

export const Body2Bold = ({ children, style }) => (
  <div
    css={css`
      ${theme.textVariants.body2Bold};
      ${style};
    `}
  >
    {children}
  </div>
);
export const Section = ({ children, gap, style }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      width: inherit;
      gap: ${gap}rem;
      ${style}
    `}
  >
    {children}
  </div>
);

Section.defaultProps = {
  gap: 0,
};
