/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  Comment,
  CommentBox,
  CommentInput,
  DocumentInfo,
  DocumentSection,
  DocumentTitle,
} from './Component';
import { DocumentWrapper, Header, Inner } from '../emotion/Component';
import { Section } from '../emotion/FontComponent';
import { Button } from '../emotion/Component';
import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router';

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const info = location.state;

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
          <DocumentTitle title={info.name} onClick={EditClick} />
          <DocumentInfo comment={info.comment ? info.comment : 3} view={info.wikiPageHits} />
        </Section>

        {/* <Section>
          <DocumentIndex />
        </Section> */}

        <Section gap={8}>
          <DocumentSection subTitle={info.outline} context={info.explanation} />
        </Section>

        <Section>
          <CommentBox comment={info.comment ? info.comment : 3}>
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
