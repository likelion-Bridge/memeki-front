import React from 'react';
import { MemeInfoBox, Header, UploadMeme } from './emotion/Component';

export const index = () => {
  return (
    <div>
      <Header type="search" />
      <Header type="main" />
      <MemeInfoBox />
      <UploadMeme />
      <UploadMeme type={'sub'} />
    </div>
  );
};

export default index;
