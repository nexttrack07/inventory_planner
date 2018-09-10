import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './src/reducers'
import Router from './src/Router';
import ReduxThunk from 'redux-thunk';

export default class App extends Component {
  componentWillMount() {

    const config = {
      apiKey: "AIzaSyDN0Ik7BOZ-vsiggVO1KltdAtzffYzo6EQ",
      authDomain: "new-inventory-planner.firebaseapp.com",
      databaseURL: "https://new-inventory-planner.firebaseio.com",
      projectId: 'new-inventory-planner',
      storageBucket: "new-inventory-planner.appspot.com",
      messagingSenderId: "1024005250733"
      };

      firebase.initializeApp(config);
  }
  render() {
     
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
