import React from 'react';
import { Header, Inner } from '../emotion/Component';
import { css } from '@emotion/react';
import { Header1, Header2, Section, Title } from '../emotion/FontComponent';
import theme from '../../styles/theme';
import { MemeTitle, UploadMeme } from './Component';

const Upload = () => {
  return (
    <Inner
      style={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Header type="search" />
      <Section
        style={css`
          align-items: center;
        `}
      ></Section>
      <Section
        style={css`
          align-items: center;
        `}
      >
        <MemeTitle></MemeTitle>
      </Section>
      <Section
        style={css`
          align-items: center;
        `}
      >
        <UploadMeme></UploadMeme>
        <UploadMeme type="sub"></UploadMeme>
      </Section>
    </Inner>
  );
};

export default Upload;
