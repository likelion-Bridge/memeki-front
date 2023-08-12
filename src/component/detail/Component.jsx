/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Body1, Body1Bold, Header1, Title } from '../emotion/FontComponent';
import theme from '../../styles/theme';
import { TextBox } from '../emotion/Component';

export const DocumentTitle = ({ title }) => {
  return (
    <TextBox
      style={css`
        color: ${theme.palette.primary[500]};
      `}
    >
      <Title>{title}</Title>
      <div
        css={css`
          display: inline-flex;
          align-items: flex-end;
        `}
      >
        <Body1Bold>[편집]</Body1Bold>
      </div>
    </TextBox>
  );
};

export const DocumentIndex = () => {
  const contextDummy =
    '1. 개요\n2. 영상\n3. 가사\n4. 대한민국에서의 화제\n    4.1. 이다현의 춤\n    4.2. 싸이의 춤';
  return (
    <div
      css={css`
        display: flex;
        background-color: ${theme.palette.primary[100]};
        filter: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.15));
        padding: 1.6rem 3.2rem;
        flex-direction: column;
        max-width: fit-content;
        min-height: fit-content;
        border-radius: 1.6rem;
        gap: 2.4rem;
      `}
    >
      <div
        css={css`
          color: ${theme.palette.gray[500]};
          ${theme.textVariants.header1};
        `}
      >
        목차
      </div>
      <div
        css={css`
          color: ${theme.palette.gray[400]};
          ${theme.textVariants.body1Bold}
          line-height: 3rem;
          white-space: pre-wrap;
        `}
      >
        {contextDummy}
      </div>
    </div>
  );
};

export const DocumentSection = ({ subTitle, context }) => {
  return (
    <div
      css={css`
        color: ${theme.palette.gray[600]};
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 0.8rem;
          padding-bottom: 1.6rem;
          border-bottom: 1px solid ${theme.palette.gray[300]};
          margin-bottom: 1.6rem;
        `}
      >
        <div
          css={css`
            display: inline-flex;
            align-items: center;
          `}
        >
          <img src={process.env.PUBLIC_URL + '/images/selectIcon.png'} alt="icon" />
        </div>
        <Header1>{subTitle}</Header1>
      </div>
      <Body1>{context}</Body1>
    </div>
  );
};
