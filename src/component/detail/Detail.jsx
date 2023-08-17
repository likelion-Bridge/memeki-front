import React from 'react';
import {
  Comment,
  CommentBox,
  CommentInput,
  DocumentIndex,
  DocumentInfo,
  DocumentSection,
  DocumentTitle,
  DocumentWrapper,
} from './Component';
import { Header, Inner } from '../emotion/Component';
import { Section } from '../emotion/FontComponent';

const Detail = () => {
  return (
    <Inner>
      <Header type="search" />
      <DocumentWrapper>
        <Section gap={2.4}>
          <DocumentTitle title="title..." />
          <DocumentInfo comment={3} view={102} />
        </Section>

        {/* <Section>
          <DocumentIndex />
        </Section> */}

        <Section gap={8}>
          <DocumentSection subTitle="소제목..." context="내용..." />
          <DocumentSection subTitle="소제목..." context="내용..." />
          <DocumentSection subTitle="소제목..." context="내용..." />
          <DocumentSection subTitle="소제목..." context="내용..." />
          <DocumentSection subTitle="소제목..." context="내용..." />
        </Section>

        <Section>
          <CommentBox comment={3}>
            <Comment />
            <Comment />
            <Comment />
            <CommentInput />
          </CommentBox>
        </Section>
      </DocumentWrapper>
    </Inner>
  );
};

export default Detail;
