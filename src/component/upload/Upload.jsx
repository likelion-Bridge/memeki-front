import React, { useState } from 'react';
import { Button, DocumentWrapper, Header, Inner, SelectBox } from '../emotion/Component';
import { css } from '@emotion/react';
import { Body2Bold, Section } from '../emotion/FontComponent';
import { MemeTitle, UploadMeme } from './Component';
import theme from '../../styles/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import selectOptions from '../store/SelectOptions';
import axios from 'axios';

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

  const ButtonClick = async () => {
    if (window.confirm('등록하시겠습니까?')) {
      const editorComponent = document.querySelector('.ql-editor');
      if (editorComponent) {
        const images = editorComponent.querySelectorAll('img');
        const imageUrls = Array.from(images).map((img) => img.getAttribute('src'));

        const dataToSend = {
          explanation: 'string',
          link: 'string',
          name: 'string',
          outline: 'string',
          year: 0,
        };

        try {
          // POST 요청 보내기
          const response = await axios.post('/api/wiki', dataToSend);
          console.log('Server response:', response.data);
          navigate('/');
        } catch (error) {
          console.error('Error sending POST request:', error);
        }
      }
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
