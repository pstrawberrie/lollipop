// Libraries
import React from 'react';
import UserSearchForm from './UserSearchForm';
import UserStats from './UserStats';


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
  handleSearch = (string) => {
    const cleanString = string.trim();
    if(cleanString !== '') this.setState({user: cleanString});
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