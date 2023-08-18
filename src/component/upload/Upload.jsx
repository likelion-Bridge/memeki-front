import React, { useState } from 'react';
import { Button, DocumentWrapper, Header, Inner, SelectBox } from '../emotion/Component';
import { css } from '@emotion/react';
import { Body2Bold, Section } from '../emotion/FontComponent';
import { MemeTitle, UploadMeme } from './Component';
import theme from '../../styles/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import selectOptions from '../store/SelectOptions';

const Upload = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const info = location.state;

  const [countrySelectedOption, setCountrySelectedOption] = useState(selectOptions.country[0].name);
  const [yearSelectedOption, setYearSelectedOption] = useState(selectOptions.year[0].name);
  const [title, setTitle] = useState(info ? info.name : '');
  const [subTitle, setSubTitle] = useState(info ? info.outline : '');
  const [explanation, setExplanation] = useState(info ? info.explanation : '');

  const onExplanationChange = (e) => {
    setExplanation(e.target.value);
  };

  const onSubTitleChange = (e) => {
    setSubTitle(e.target.value);
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const CountrySelectClick = (optionName) => {
    setCountrySelectedOption(optionName);
  };
  const YearSelectClick = (optionName) => {
    setYearSelectedOption(optionName);
  };

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
          <SelectBox
            selectClick={CountrySelectClick}
            selectedOption={countrySelectedOption}
            type="country"
          />
          <SelectBox
            selectClick={YearSelectClick}
            selectedOption={yearSelectedOption}
            type="year"
          />
        </Section>

        <DocumentWrapper>
          <Section
            style={css`
              align-items: center;
            `}
          >
            <MemeTitle title={title} onChange={onTitleChange} />
          </Section>
          <Section
            style={css`
              align-items: flex-end;
            `}
          >
            <UploadMeme
              subTitle={subTitle}
              onSubTitle={onSubTitleChange}
              onExplanationChange={onExplanationChange}
              explanation={explanation}
            />
            {/* <UploadMeme type="sub"></UploadMeme> */}
            <Button onClick={ButtonClick} />
          </Section>
        </DocumentWrapper>
      </Section>
    </Inner>
  );
};

export default Upload;
