import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
firebase.initializeApp({
    apiKey: "AIzaSyDA-jr2LoPZl6EaiSIwX6UWCAEw8Wm69n4",
    authDomain: "chabim-3033c.firebaseapp.com",
    databaseURL: "https://chabim-3033c.firebaseio.com",
    projectId: "chabim-3033c",
    storageBucket: "chabim-3033c.appspot.com",
    messagingSenderId: "1042359048051"});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
