import React from 'react';
import {
  Header,
  Inner,
  SearchBar,
  SelectBox,
  TextBox,
  MemeInfoBox,
  UploadMeme,
  Category,
  MemeInfoBoxList,
} from './emotion/Component';
import { css } from '@emotion/react';
import { Header1, Header2, Section, Title } from './emotion/FontComponent';
import theme from '../styles/theme';

const index = () => {
  return (
    <Inner style={css``}>
      <Header type="main" />
      <Section
        style={css`
          gap: 2.4rem;
          align-items: center;
        `}
      >
        <Title
          style={css`
            color: ${theme.palette.primary[500]};
            text-align: center;
          `}
        >
          Let's memeki
        </Title>
        <Header2
          style={css`
            text-align: center;
          `}
        >
          예전에 떴던 혹은 현재 뜨고 있는
          <br /> 게시물, 신조어가 궁금하신가요?
          <br /> 밈에 대한 모든 것을 알려드립니다
        </Header2>
      </Section>
      <Section>
        <SearchBar />
      </Section>
      <Section gap="3.2">
        <TextBox>
          <Header1
            style={css`
              display: flex;
              gap: 1.6rem;
            `}
          >
            <Category type="newCheck" />
            <Category type="popular" />
          </Header1>
          <SelectBox type="date" />
        </TextBox>
        <MemeInfoBoxList>
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
        </MemeInfoBoxList>
      </Section>
    </Inner>
  );
};

export default index;
