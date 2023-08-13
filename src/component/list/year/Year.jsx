import React from 'react';
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

const Year = () => {
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
          <SelectBox type="year" />
        </TextBox>
        <MemeInfoBoxList>
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
          <MemeInfoBox />
        </MemeInfoBoxList>
      </Section>
    </Inner>
  );
};

export default Year;
