import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Header,
  Inner,
  SearchBar,
  SelectBox,
  TextBox,
  MemeInfoBox,
  Category,
  MemeInfoBoxList,
} from './emotion/Component';
import { css } from '@emotion/react';
import { Header1, Header2, Section, Title } from './emotion/FontComponent';
import theme from '../styles/theme';

const Index = () => {
  const [wikiData, setWikiData] = useState(null);

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
    <Inner style={css``}>
      <Header type="main" />
      <Section
        style={css`
          gap: 2.4rem;
          align-items: center;
        `}
      >
        <Title
          style={css`
            color: ${theme.palette.primary[500]};
            text-align: center;
          `}
        >
          Let's memeki
        </Title>
        <Header2
          style={css`
            text-align: center;
          `}
        >
          예전에 떴던 혹은 현재 뜨고 있는
          <br /> 게시물, 신조어가 궁금하신가요?
          <br /> 밈에 대한 모든 것을 알려드립니다
        </Header2>
      </Section>
      <Section>
        <SearchBar />
      </Section>
      <Section gap="3.2">
        <TextBox>
          <Header1
            style={css`
              display: flex;
              gap: 1.6rem;
            `}
          >
            <Category type="popular" />
          </Header1>
          {/* <SelectBox type="date" /> */}
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

export default Index;
