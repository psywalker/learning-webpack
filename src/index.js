import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Main from './router';
import BoardsObj from './reducers'


let store = createStore(BoardsObj)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
