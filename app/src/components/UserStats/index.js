// Libraries
import React from 'react';

// User Stats Component
const UserStats = (props) => (
  <section className="user-stats">
    {props.userStats === null ? 'Search for a Hero' : 'WE HAVE STATS'}
  </section>
)

export default UserStats;