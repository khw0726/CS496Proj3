<template>
  <div>
      <div class="title">
        <h2>title : {{myArticle.title}} <small>{{dateStr()}}</small></h2>
        <button v-on:click="removeArticle(myArticle)">X</button>
      </div>

      <div class="contents">
        <p>diary : {{myArticle.contents}}</p>
      </div>
    
      <div class="response">
        <p>response : {{myArticle.response}}</p>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'diary',
    props: ['myArticle', 'removeArticle'],
    methods: {
      dateStr: function () {
        let d = new Date(this.myArticle.date)
        console.log(d)
        return d.toLocaleString('en-US')
      }
    }
  }
</script>

<style>
.contents{
  text-indent: '4em';
  font: 'Consolas';
  margin-top: '20em';
  color: darkslategray;
}
</style>
