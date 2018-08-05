// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// App Component
export default class UserStats extends React.Component {

  componentDidMount() {
    console.log('UserStats / component did mount');
  }

  componentDidUpdate() {
    console.log('UserStats / component did update');
  }

  componentWillUnmount() {
    console.log('UserStats / component will unmount')
  }

  render() {
    return (
      <section className="user-stats">
        {this.props.userStats === null ? 'Search for a Hero' : 'WE HAVE STATS'}
      </section>
    )
  }

}