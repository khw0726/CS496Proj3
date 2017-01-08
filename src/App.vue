<template>
  <div class = "container-fluid">
    <div class="page-header text-center">
      <h1>Just a small diary app</h1>
    </div>
    <div id="app" class="row">

      <div class="col-md-8">
        <!--<calendar></calendar>-->
        <!--<auth :users="users"></auth>-->
        <Diary :my-article="targetArticle" :remove-article="removeArticle"></Diary>
        <Edit :diary="diary" :onSubmit="addEntry"></Edit>
      </div>

      <div class="col-md-3 col-md-offset-1">
        <Sidebar :items="diary" :onItemClick="loadArticle" ></Sidebar>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable */
import Diary from './components/Diary'
import Sidebar from './components/Sidebar'
import Edit from './components/Edit'
import Auth from './components/Auth'
import fb from './db'
import firebase from 'firebase'
let db = fb.database();

//Create user with form - Use Callback
var email = 'junsoo@naver.com';
var password = 'qwerasdf';

/*
fb.auth().createUserWithEmailAndPassword(email, password)
.catch(function(error){
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
*/

//Google login with firebase - Use Callback

var provider = new firebase.auth.GoogleAuthProvider();
provider = new firebase.auth.TwitterAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/plus.login');
console.log(provider);
//provider.addScope('publish_actions')
//provider.addScope('')

var token;
var credential;
fb.auth().signInWithPopup(provider).then(function(result){
  // This gives you a Google Access Token. You can use it to access the Google API.
  token = result.credential.accessToken;
  credential = result.credential;
  console.log(credential);
  // The signed-in user info.
  var user = result.user;
  //console.log(user);
  //console.log('Hello,' +user.displayName);
  //alert('Hello,' +user.displayName);
  // ...
  //user = user.delete();
  //console.log(user);
  var diary='1';
  var response='1';
  var user_token=credential.accessToken;
  var user_secret=credential.secret;
  var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://ec2-52-79-161-158.ap-northeast-2.compute.amazonaws.com:3000/?diary=diary:%20'+diary+'%0A&response=junsoo:%20'+response+'&user_token='+user_token+'&user_secret='+user_secret, true)

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          console.log(xhr.response)
        }
      }
     
      xhr.send()
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
});


//POST https://api.twitter.com/1.1/statuses/update.json?status=1234

//Auth

/*
fb.auth().signOut().then(function() {
  // Sign-out successful.
  alert('Sign out completed');
}, function(error) {
  // An error happened.
  alert('Error happened');
});
*/


const diaryRef = db.ref('diary')

// const usersRef = auth
export default {
  name: 'app',
  components: {
    Diary,
    Sidebar,
    Edit,
    Auth
  },
  firebase: {
    diary: diaryRef
  },
  data: function () {
    return ({
      targetArticle: {
        title: '',
        contents: '',
        keyPhrases: [],
        sentiment: -1,
        date: ''
      }
    })
  },
  methods: {
    addEntry (newEntry) {
      // let curUser = usersRef.currentUser
      // if (curUser) {
        // let uid = curUser.getToken()
        // diaryRef.set(db.ref('diary2/' + uid + '/' + newEntry.date))
      diaryRef.push(newEntry)
      // }
    },
    loadArticle (article) {
      this.targetArticle = article
    },
    removeArticle (article) {
      diaryRef.child(article['.key']).remove()
      this.targetArticle.title = ''
      this.targetArticle.contents = ''
      this.targetArticle.response = ''
      this.targetArticle.date = ''
    }
    // tryLogin (user) {
    //   usersRef.signInWithEmailAndPassword(user.email, user.password).catch(function (err) {
    //     console.log(err)
    //     alert('Login failed')
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
