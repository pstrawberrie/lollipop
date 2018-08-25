// Libraries
import React from 'react';
import Loader from './Loader';
import UserSearchForm from './UserSearchForm';
import UserStats from './UserStats';
import axios from 'axios';
import { endpoint } from '../util/helpers';

// App Component
export default class App extends React.Component {

  state = {
    user: '',
    loading: false,
    error: null,
    userInfo: null,
    userStats: null,
    searchTimeout: 0,
  }

  componentDidMount() {
    console.log('App / component did mount');
  }

  componentDidUpdate() {
    console.log('App / component did update');
    console.log(this.state);//REMOVE
  }

  componentWillUnmount() {
    console.log('App / component will unmount');
  }

  // User Search
  handleSearch = (searchFormState) => {
    this.setState({ loading: true });
    const cleanString = searchFormState.inputText.trim();
    const region = searchFormState.region;
    if(cleanString === '' || region === '') return;
    
    axios.post(endpoint.league, {
      callData: {
        region,
        user: cleanString
      }
    })
    .then(response => {
      console.log(response.data);
      if(response.error) {
        this.setState({
          loading: false,
          errors: response.userError
        })
      } else {
        this.setState({
          loading: false,
          user: cleanString,
          userInfo: response.data.userInfo
        });
      }
    })
    .catch(err => {
      console.log('error with call in handleSearch: ', err);
    });
  }

  render() {
    return (
      <main className="app-wrapper">
        <UserSearchForm handleSearch={this.handleSearch} />
        <UserStats userStats={this.state.userStats}
                   user={this.state.user}
                   userInfo={this.state.userInfo}
                   errors={this.state.errors}  />
        <Loader loading={this.state.loading} /> 
      </main>
    )
  }

}