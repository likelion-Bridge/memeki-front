import React from 'react';
import { Inner, SelectBox, TextBox, Toast } from './emotion/Component';
import { Header } from './emotion/Component';

export const index = () => {
  return (
    <div>
      index <Toast />
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
