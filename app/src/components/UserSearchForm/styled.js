import styled from 'styled-components';
import { color, font, size } from '../../util/styled';
import { Search } from 'styled-icons/fa-solid/Search';

// Elements
const LogoText = styled.h1`
  text-align: center;
  padding: 2rem 1rem;
  font-family: ${font.family.title};
  font-size: ${font.size.medium};
  background-color: ${color.secondary};
  color: ${color.white};
  margin: 0;

  @media (min-width: ${size.mobileMin}) {
    font-size: ${font.size.large};
    line-height: ${font.lineHeight.title};
  }
`;

const FormElement = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background: ${color.secondary};
  padding: .5rem 2rem 2rem;
  width: 100%;
`;

const FormTextInput = styled.input`
  box-sizing: border-box;
  font-size: ${font.size.form};
  padding: .75rem 1rem;
  border: 0;
  margin: 0;
  background-color: ${color.whiteTransparent};
  width: 100%;

  @media (min-width: ${size.mobileMin}) {
    width: 60%;
    max-width: 700px;
    font-size: ${font.size.medium};
  }
`;

const FormRadioGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 0;
  font-size: ${font.size.small};
  color: ${color.white};

  label {
    display: flex;
    align-items: center;
    margin: .25rem;
    padding: .45rem;
    border: 2px solid ${color.whiteTransparent};

    input {
      display: inline-block;
      margin-right: .5rem;
    }
  }

  @media (min-width: ${size.mobileMin}) {
    font-size: ${font.size.form};
  }
`;

const FormSubmitWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: ${color.white};
  width: 60px;
  height: 100%;

  @media (min-width: ${size.xsMin}) {
    font-size: ${font.size.medium};
    width: 120px;
  }
`;

const FormSubmitButton = styled.input`
  cursor: pointer;
  box-sizing: border-box;
  border: 0;
  font-size: ${font.size.form};
  padding: .75rem 1rem;
  color: ${color.white};
  background-color: transparent;
  z-index: 2;
  width: 100%;

  @media (min-width: ${size.mobileMin}) {
    font-size: ${font.size.medium};
  }
`;

const SearchIcon = Search.extend`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 1rem;
  height: auto;
  background-color: ${color.white};
  margin: auto;
  z-index: 1;
 
  path { fill: ${color.secondary}; }

  @media (min-width: ${size.xsMin}) {
    max-width: 2rem;
  }
`;

export { 
  LogoText,
  FormElement,
  FormTextInput,
  FormRadioGroup,
  FormSubmitWrapper,
  FormSubmitButton,
  SearchIcon 
};