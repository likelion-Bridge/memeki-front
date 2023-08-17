/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  Comment,
  CommentBox,
  CommentInput,
  DocumentIndex,
  DocumentInfo,
  DocumentSection,
  DocumentTitle,
} from './Component';
import { DocumentWrapper, Header, Inner } from '../emotion/Component';
import { Section } from '../emotion/FontComponent';
import { Button } from '../emotion/Component';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router';

const Detail = () => {
  const navigate = useNavigate();

  const EditClick = () => {
    navigate('/upload');
  };

  const ButtonClick = () => {
    navigate('/');
  };
  return (
    <Inner>
      <Header type="search" />
      <DocumentWrapper>
        <Section gap={2.4}>
          <DocumentTitle title="title..." onClick={EditClick} />
          <DocumentInfo comment={3} view={102} />
        </Section>

        {/* <Section>
          <DocumentIndex />
        </Section> */}

        <Section gap={8}>
          <DocumentSection subTitle="소제목..." context="내용..." />
        </Section>

        <Section>
          <CommentBox comment={3}>
            <Comment />
            <Comment />
            <Comment />
          </CommentBox>
        </Section>

        <Section
          style={css`
            gap: 3.2rem;
            margin-top: -2.4rem;
            align-items: flex-end;
          `}
        >
          <CommentInput />
          <Button onClick={ButtonClick} />
        </Section>
      </DocumentWrapper>
    </Inner>
  );
};

export default Detail;
