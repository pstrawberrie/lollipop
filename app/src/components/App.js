// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// App Component
export default class App extends React.Component {

  state = {
    some: 'thing'
  }

  componentDidMount() {
    console.log('component will mount');
  }

  componentDidUpdate() {
    console.log('component will update');
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  render() {
    return (
      <main className="app-wrapper">
        <h1 style={{margin: '2rem 0', textAlign: 'center'}}>
          <Link to="/sdf">Base 2018 (React)</Link>
        </h1>
      </main>
    )
  }

}