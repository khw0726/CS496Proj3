<template>
  <div class = "container-fluid">
    <div class="page-header text-center">
      <h1>Just a small diary app</h1>
    </div>
    <div id="app" class="row">
      <div class="col-md-9">
        <Diary :my-article="targetArticle" :removeArticle="removeArticle"></Diary>
        <Edit :diary="diary" :onSubmit="addEntry"></Edit>
      </div>

      <div class="col-md-3">
        <Sidebar :items="diary" :onItemClick="loadArticle" ></Sidebar>
      </div>
    </div>
  </div>
</template>
<script>
import Diary from './components/Diary'
import Sidebar from './components/Sidebar'
import Edit from './components/Edit'
import db from './db'

const diaryRef = db.ref('diary')

// let newArticle = {
//   title: 'What a wonderful vue!',
//   contents: 'I hate js',
//   response: 'That\'s too bad'

// }
export default {
  name: 'app',
  components: {
    Diary,
    Sidebar,
    Edit
  },
  firebase: {
    diary: diaryRef
  },
  data: function () {
    return ({
      targetArticle: {
        title: '',
        contents: '',
        response: '',
        date: ''
      }
    })
  },
  methods: {
    addEntry (newEntry) {
      diaryRef.push(newEntry)
    },
    loadArticle (article) {
      this.targetArticle = article
    },
    removeArticle (article) {
      diaryRef.child(article['.key']).remove()
      this.targetArticle.title = ' '
      this.targetArticle.contents = ' '
      this.targetArticle.response = ' '
      this.targetArticle.date = ' '
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
