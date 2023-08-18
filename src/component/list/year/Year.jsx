import React, { useEffect, useState } from 'react';
import {
  Category,
  Header,
  Inner,
  MemeInfoBox,
  MemeInfoBoxList,
  SelectBox,
  TextBox,
} from '../../emotion/Component';
import { Header1, Section } from '../../emotion/FontComponent';
import { css } from '@emotion/react';
import axios from 'axios';
import selectOptions from '../../store/SelectOptions';

const Year = () => {
  const [wikiData, setWikiData] = useState(null);
  const [yearSelectedOption, setYearSelectedOption] = useState(selectOptions.year[0].name);

  const YearSelectClick = (optionName) => {
    setYearSelectedOption(optionName);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/wiki');
        const filteredData = response.data.filter((item) => {
          if (yearSelectedOption === '2000년 이전') {
            return parseInt(item.year) < 2000;
          } else if (yearSelectedOption === '2000년 대') {
            return parseInt(item.year) >= 2000 && parseInt(item.year) < 2010;
          } else if (yearSelectedOption === '2010년 대') {
            return parseInt(item.year) >= 2010 && parseInt(item.year) < 2020;
          } else if (yearSelectedOption === '2020년 대') {
            return parseInt(item.year) >= 2020 && parseInt(item.year) < 2030;
          }
          return true; // 기본적으로 모든 데이터 표시
        });
        setWikiData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [yearSelectedOption]);

  return (
    <Inner>
      <Header type="search" />
      <Section gap="3.2">
        <TextBox>
          <Header1
            style={css`
              display: flex;
              gap: 1.6rem;
            `}
          >
            <Category type="year" />
          </Header1>
          <SelectBox
            selectedOption={yearSelectedOption}
            selectClick={YearSelectClick}
            type="year"
          />
        </TextBox>
        <MemeInfoBoxList>
          {wikiData ? (
            wikiData.map((item) => <MemeInfoBox item={item} />) // 데이터를 출력
          ) : (
            <p>Loading...</p> // 데이터가 로드되는 동안 표시할 내용
          )}
        </MemeInfoBoxList>
      </Section>
    </Inner>
  );
};

export default Year;
