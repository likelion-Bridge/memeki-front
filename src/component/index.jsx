import React from 'react';
import { Toast, UploadMeme } from './emotion/Component';
import { Header } from './emotion/Component';
import { MemeInfoBox } from './emotion/Component';

export const index = () => {
  return (
    <div>
      <Header type="search" />
      <Header type="main" />
      <MemeInfoBox></MemeInfoBox>
      <UploadMeme></UploadMeme>
    </div>
  );
};

export default index;
