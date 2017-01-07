
<template>
  <div>
    <form role="form" id="editForm" v-on:submit.prevent="addEntry">
      <div class="form-group">
        <input type="text" v-model="newEntry.title" class="form-control" placeholder="Title"></input>
        <br>
        <textarea class="form-control" v-model="newEntry.contents" placeholder="How was your day?" rows="10"></textarea>
      </div>
      <button type="submit" class = "btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
/*eslint-disable */
var contents = "";
var response1 = "";
var response2 = "";
export default {
  name: 'edit',
  props: ['diary', 'onSubmit'],
  data: function () {
    return ({
      newEntry: {
        title: '',
        contents: '',
        response: '',
        date: ''
      }
    })
  },
  methods: {
    addEntry () {
      this.newEntry.date = Date()
      contents = this.newEntry.contents;


      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases', false);
      //xhr.setRequestHeader('Host', 'westus.api.cognitive.microsoft.com');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Ocp-Apim-Subscription-Key', '04c0ff18cfba42ee98308e132887ef84');
      xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        response1=xhr.responseText;
        //console.log(response1);
      }
      }
      var jsonStr = JSON.stringify({
      "documents": [
      {
      "language": "en",
      "id": "string",
      "text": contents
      }
      ]
      })
      xhr.send(jsonStr);

      xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment', false);
      //xhr.setRequestHeader('Host', 'westus.api.cognitive.microsoft.com');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Ocp-Apim-Subscription-Key', '04c0ff18cfba42ee98308e132887ef84');
      xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        response2=xhr.responseText;
        console.log(response2);
      }
      }
      jsonStr = JSON.stringify({
      "documents": [
      {
      "language": "en",
      "id": "string",
      "text": contents
      }
      ]
      })
      xhr.send(jsonStr);

      this.newEntry.response = response1 + '\n' + response2;
      console.log(this.newEntry.response);

      this.onSubmit(this.newEntry)
      this.newEntry.title = ''
      this.newEntry.contents = ''
    }
  }
}
</script>

<style>
</style>
