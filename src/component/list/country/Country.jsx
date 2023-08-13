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

const Country = () => {
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
          <SelectBox type="country" />
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

export default Country;
