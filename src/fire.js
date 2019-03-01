import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDgjnAvGQAbibfwuZIM0Y5fFSbUiYkZqKA",
  authDomain: "tbh-snap.firebaseapp.com",
  databaseURL: "https://tbh-snap.firebaseio.com",
  projectId: "tbh-snap",
  storageBucket: "tbh-snap.appspot.com",
  messagingSenderId: "266084324721"
  };

  var fire = firebase.initializeApp(config);

export default fire;