import React from 'react';
import regions from '../../../../data/regions.json';
import { 
  LogoText,
  FormElement,
  FormTextInput,
  FormRadioGroup,
  FormSubmitWrapper,
  FormSubmitButton,
  SearchIcon 
} from './styled';

// User Search Form Component
export default class UserSearchForm extends React.Component {

  defaultRegion = 'NA';

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

  handleRadioChange = event => {
    this.setState({region: event.target.value});
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
          <div style={{display:'flex', justifyContent: 'center', marginBottom: '1rem'}}>
            <FormTextInput type="text" onChange={this.handleTextChange} />
            <FormSubmitWrapper>
              <FormSubmitButton type="submit" value="" />
              <SearchIcon />
            </FormSubmitWrapper>
          </div>
          <FormRadioGroup>
            { Object.keys(regions).map((region, index) => {
              return(
                <div key={index}>
                  <label>
                    <input type="radio" value={region} checked={this.state.region === region} onChange={this.handleRadioChange} name="region" />
                    {region}
                  </label>
                </div>
              )
            }) }
          </FormRadioGroup>
        </FormElement>
      </React.Fragment>
    );
  }

}