import React from 'react';
import styled from 'styled-components';
import regions from '../../../data/regions.json';
import { color, font, size } from '../util/styled';
import { Search } from 'styled-icons/fa-solid/Search';

// Elements
const LogoText = styled.h1`
  text-align: center;
  padding: 3.5rem 1rem 2rem;
  font-family: ${font.family.title};
  font-size: ${font.size.large};
  background-color: ${color.secondary};
  color: ${color.white};
  margin: 0;

  @media (min-width: ${size.mobileMin}) {
    font-size: ${font.size.hero};
    line-height: ${font.lineHeight.title};
  }
`;

const FormElement = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background: ${color.secondary};
  padding: 4rem 2rem;
  width: 100%;

  @media (min-width: ${size.xsMin}) {
    flex-direction: row;
  }
`;

const FormTextInput = styled.input`
  font-size: ${font.size.form};
  padding: .75rem 1rem;
  border: 0;
  background-color: ${color.whiteTransparent};
  width: 100%;

  @media (min-width: ${size.mobileMin}) {
    width: 60%;
    max-width: 700px;
    font-size: ${font.size.medium};
  }
`;

const FormSelectBox = styled.select`
  border: 0;
  font-size: ${font.size.form};
`;

const FormSubmitWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: ${color.white};
  width: 100%;

  @media (min-width: ${size.xsMin}) {
    font-size: ${font.size.medium};
    width: 120px;
  }
`;

const FormSubmitButton = styled.input`
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
  max-width: 2rem;
  height: auto;
  background-color: ${color.white};
  margin: auto;
  z-index: 1;
 
  path { fill: ${color.secondary}; }
`;

// User Search Form Component
export default class UserSearchForm extends React.Component {

  defaultRegion = 'NA1';

  state = {
    inputText: '',
    region: this.defaultRegion
  }

  componentDidMount() {
    console.log('UserSearchForm / component did mount');
  }

  componentDidUpdate() {
    console.log('UserSearchForm / component did update');
  }

  handleTextChange = event => {
    this.setState({inputText: event.currentTarget.value});
  }

  handleSelectChange = event => {
    this.setState({region: event.currentTarget.value});
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state);
  }

  render() {
    return(
      <React.Fragment>
        <LogoText>Lollipop</LogoText>
        <FormElement onSubmit={this.handleFormSubmit}>
          <FormTextInput type="text" onChange={this.handleTextChange} />
          <FormSubmitWrapper>
            <FormSubmitButton type="submit" value="" />
            <SearchIcon />
          </FormSubmitWrapper>
          <FormSelectBox defaultValue={this.defaultRegion} onChange={this.handleSelectChange}>
            { Object.keys(regions).map((region, index) => {
              return(<option key={index} value={region}>{region}</option>)
            }) }
          </FormSelectBox>
        </FormElement>
      </React.Fragment>
    );
  }

}