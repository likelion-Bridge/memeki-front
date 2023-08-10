import React from 'react';
import { Header, Inner, SearchBar, SelectBox, TextBox, MemeInfoBox } from './emotion/Component';

export const index = () => {
  return (
    <div>
      main
      <Header type="search" />
      <Header type="main" />
      <SelectBox type="date" />
      <SelectBox type="country" />
      <Inner>
        <TextBox>
          <div>하이</div>
          <SelectBox type="year" />
        </TextBox>
        <SearchBar />
      </Inner>
      <MemeInfoBox />
    </div>
  );
};

export default index;
