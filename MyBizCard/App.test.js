import React from 'react';
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import App from './App';
import store from './store'

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
