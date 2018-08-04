import React from 'react';
import styled from 'styled-components';
import { color, font } from '../util/styled';

const NotFoundWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${color.primary};

  h1 {
    color: ${color.light};
    font-family: ${font.family.title};
    font-size: ${font.size.large};
    line-height: ${font.lineHeight.title};
  }
`;

export default () => (
  <NotFoundWrapper>
    <h1>Page Not Found</h1>
  </NotFoundWrapper>
);