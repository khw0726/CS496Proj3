<template>
  <div>
      <div class="title">
        <h2>{{myArticle.title}} <small>{{dateStr()}}</small></h2>
      </div>

      <div class="contents">
        <p>{{myArticle.contents}}</p>
      </div>
    
      <div class="response">
        <p>{{myArticle.response}}</p>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'diary',
    props: ['myArticle'],
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
