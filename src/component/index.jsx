import React from 'react';
import { Header } from './emotion/Component';
import { MemeInfoBox } from './emotion/Component';
import { Button } from './emotion/Component';

export const index = () => {
  return (
    <div>
      <Header type="search" />
      <Header type="main" />
      <MemeInfoBox></MemeInfoBox>
      <Button type="new"></Button>
      <Button></Button>
    </div>
  );
};

export default index;
