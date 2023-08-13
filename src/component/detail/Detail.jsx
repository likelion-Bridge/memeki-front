import React from 'react';
import { DocumentIndex, DocumentSection, DocumentTitle, DocumentWrapper } from './Component';
import { Header, Inner } from '../emotion/Component';

const Detail = () => {
  return (
    <Inner>
      <Header type="search" />
      <DocumentWrapper>
        <DocumentTitle title="title..." />
      </DocumentWrapper>
    </Inner>
  );
};

export default Detail;
