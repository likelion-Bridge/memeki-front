import React from 'react';
import { Button, DocumentWrapper, Header, Inner, SelectBox } from '../emotion/Component';
import { css } from '@emotion/react';
import { Body2Bold, Section } from '../emotion/FontComponent';
import { MemeTitle, UploadMeme } from './Component';
import theme from '../../styles/theme';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const navigate = useNavigate();
  const ButtonClick = () => {
    if (window.confirm('등록하시겠습니까?')) {
      // console.log('등록');
      // 등록하면 해당 밈 문서로 이동
      navigate('/');
    }
  };
  return (
    <Inner
      style={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Header type="search" />
      <Section>
        <Section
          style={css`
            flex-direction: row;
            justify-content: flex-end;
            color: ${theme.palette.primary[500]};
          `}
        >
          <Body2Bold>카테고리 설정: </Body2Bold>
          <SelectBox type="country" />
          <SelectBox type="year" />
        </Section>

        <DocumentWrapper>
          <Section
            style={css`
              align-items: center;
            `}
          >
            <MemeTitle />
          </Section>
          <Section
            style={css`
              align-items: flex-end;
            `}
          >
            <UploadMeme></UploadMeme>
            {/* <UploadMeme type="sub"></UploadMeme> */}
            <Button onClick={ButtonClick} />
          </Section>
        </DocumentWrapper>
      </Section>
    </Inner>
  );
};

export default Upload;
