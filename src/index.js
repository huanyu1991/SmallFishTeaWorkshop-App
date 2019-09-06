import React from 'react';
import ReactDOM from 'react-dom';
import ListTest from './ListTest';
import NavigationBar from './navigationbar';

ReactDOM.render(<ListTest />, document.getElementById('root'));
ReactDOM.render(<NavigationBar />,document.getElementById('navigationbar_id'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
