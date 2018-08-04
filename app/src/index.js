/**
 * App Entry
 */

import './public/less/main.less';

import { consoleGreet } from './util/helpers';

import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';

document.addEventListener('DOMContentLoaded', function() {
  consoleGreet();
  render(
    <Router />,
    document.querySelector('#app')
  );
});