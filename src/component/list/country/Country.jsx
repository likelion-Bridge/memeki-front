import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import selectOptions from '../../store/SelectOptions';

const Country = () => {
  const [wikiData, setWikiData] = useState(null);
  const [countrySelectedOption, setCountrySelectedOption] = useState(selectOptions.country[0].name);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        if (countrySelectedOption === '일본 밈') {
          response = await axios.get('/api/wiki/jp');
        } else if (countrySelectedOption === '국내 밈') {
          response = await axios.get('/api/wiki');
        }

        setWikiData(response.data);
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [countrySelectedOption]);

  const CountrySelectClick = (optionName) => {
    setCountrySelectedOption(optionName);
  };

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
            <Category type="country" />
          </Header1>
          <SelectBox
            selectClick={CountrySelectClick}
            selectedOption={countrySelectedOption}
            type="country"
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

export default Country;
