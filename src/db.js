import firebase from 'firebase'
/*eslint-disable */
var config = {
    apiKey: "AIzaSyCGUiEq7RzyYn1wne4rwJZtEZn1m6QtJV0",
    authDomain: "test-web-91d3a.firebaseapp.com",
    databaseURL: "https://test-web-91d3a.firebaseio.com",
    storageBucket: "test-web-91d3a.appspot.com",
    messagingSenderId: "464548710498"
  };

let fb = firebase.initializeApp(config)
//let db = fb.database()
// let auth = fb.auth()

export default fb
