import React from 'react';
import { Header, Inner, MemeInfoBox, MemeInfoBoxList, Button } from '../emotion/Component';
import { css } from '@emotion/react';
import { Header1, Header2, Section, Title } from '../emotion/FontComponent';
import theme from '../../styles/theme';
import { SearchBar } from '../emotion/Component';
import { Document } from '../emotion/Component';
import { FindText } from '../emotion/Component';

const Search = () => {
  return (
    <Inner
      style={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Header type="main" />

      <SearchBar></SearchBar>
      <MemeInfoBoxList>
        <MemeInfoBox></MemeInfoBox>
        <MemeInfoBox></MemeInfoBox>
        <MemeInfoBox></MemeInfoBox>
      </MemeInfoBoxList>
      <FindText count={0}></FindText>
      <Document></Document>
    </Inner>
  );
};

export default Search;
