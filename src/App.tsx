import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import UserLists from './components/UserLists';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
       <UserLists/>
    </Provider>
  );
}

export default App;
