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
    // 데이터를 가져오는 함수를 정의합니다.
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/wiki');
        setWikiData(response.data); // 가져온 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // 데이터를 가져오는 함수를 호출
  }, []);
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
            selectClick={YearSelectClick}
            selectedOption={yearSelectedOption}
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
