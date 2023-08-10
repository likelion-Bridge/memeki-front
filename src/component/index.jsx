import React from 'react';
import { Toast } from './emotion/Component';
import { Header } from './emotion/Component';
import { MemeInfoBox } from './emotion/Component';

export const index = () => {
  return (
    <div>
      index <Toast />
      <Header type="search" />
      <Header type="main" />
      <MemeInfoBox></MemeInfoBox>
    </div>
  );
};

export default index;
