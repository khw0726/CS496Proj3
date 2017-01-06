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
      this.onSubmit(this.newEntry)
      this.newEntry.title = ''
      this.newEntry.contents = ''
    }
  }
}
</script>

<style>
</style>
