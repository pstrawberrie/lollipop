import React from 'react';
import styled from 'styled-components';
import { color, font, size } from '../util/styled';
import { Link } from 'react-router-dom';

const NotFoundWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${color.primary};
  padding: 1rem 0;

  h1 {
    color: ${color.light};
    font-family: ${font.family.title};
    font-size: ${font.size.large};
    line-height: ${font.lineHeight.title};

    @media (min-width: ${size.mobileMax}) {
      font-size: ${font.size.xlarge};
    }
  }
`;
const StyledLink = styled(Link)`
  margin-top: 1.5rem;
  font-family: ${font.family.black};
  text-transform: uppercase;
  padding: 1rem 2rem;
  background: ${color.light};
`;

export default class NotFound extends React.Component {

  render() {
    return (
      <NotFoundWrapper>
        <h1>Page Not Found</h1>
        <StyledLink to="#" onClick={this.props.history.goBack}>Go Back</StyledLink>
      </NotFoundWrapper>
    );
  }
}