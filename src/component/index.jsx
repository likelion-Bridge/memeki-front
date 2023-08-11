import React from 'react';
import { MyEditor, Toast, UploadMeme } from './emotion/Component';
import { Header } from './emotion/Component';
import { MemeInfoBox } from './emotion/Component';

export const index = () => {
  return (
    <div>
      <Header type="search" />
      <Header type="main" />
      <MemeInfoBox></MemeInfoBox>
      <UploadMeme></UploadMeme>
      <UploadMeme type="sub"></UploadMeme>
    </div>
  );
};

export default index;
