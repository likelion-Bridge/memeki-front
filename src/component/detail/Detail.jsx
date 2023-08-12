import React from 'react';
import { DocumentIndex, DocumentSection, DocumentTitle } from './Component';

const Detail = () => {
  return (
    <div>
      Detail
      <DocumentTitle title="제목..." />
      <DocumentIndex />
      <DocumentSection subTitle="1. 소제목.." context="내용..." />
    </div>
  );
};

export default Detail;
