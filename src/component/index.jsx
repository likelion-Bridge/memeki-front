import React from 'react';
import { Inner, SelectBox, TextBox } from './emotion/Component';
import { Header } from './emotion/Component';

export const index = () => {
  return (
    <div>
      index
      <Header type="search" />
      <Header type="main" />
      <SelectBox type="date" />
      <SelectBox type="country" />
      <Inner>
        <TextBox>
          <div>하이</div>
          <SelectBox type="year" />
        </TextBox>
      </Inner>
    </div>
  );
};

export default index;
