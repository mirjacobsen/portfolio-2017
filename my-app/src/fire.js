import firebase from 'firebase';
var config = {
  apiKey: 'AIzaSyCSMfub9Qtg2MiEltwYKAnTgwu2zX5aKDs',
  authDomain: 'portfolio-2017-3b086.firebaseapp.com',
  databaseURL: 'https://portfolio-2017-3b086.firebaseio.com',
  projectId: 'portfolio-2017-3b086',
  storageBucket: 'portfolio-2017-3b086.appspot.com',
  messagingSenderId: '24243630343',
};
var fire = firebase.initializeApp(config);
export default fire;
