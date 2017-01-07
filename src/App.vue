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
import Diary from './components/Diary'
import Sidebar from './components/Sidebar'
import Edit from './components/Edit'
import Auth from './components/Auth'
import db from './db'

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
