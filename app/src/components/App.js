// Libraries
import React from 'react';
import UserSearchForm from './UserSearchForm';
import UserStats from './UserStats';
import axios from 'axios';
import { endpoint } from '../util/helpers';

// App Component
export default class App extends React.Component {

  state = {
    user: '',
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
    const cleanString = searchFormState.inputText.trim();
    const region = searchFormState.region;
    if(cleanString === '' || region === '') return;
    
    axios.post(endpoint.league, {
      callData: {
        region,
        user: cleanString,
        service: 'summonerByName'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log('error with call in handleSearch: ', err);
    });
    this.setState({user: cleanString});
  }

  render() {
    return (
      <main className="app-wrapper">
        <UserSearchForm handleSearch={this.handleSearch} />
        <UserStats userStats={this.state.userStats} user={this.state.user}  />
      </main>
    )
  }

}