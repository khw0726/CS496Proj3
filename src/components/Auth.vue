<template>
  <div class="modal fade">
    <div class="modal-dialog">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Log in to continue</h4>
      </div>
      <div class="modal-body">
        <form role="form" id="authForm" v-on:submit.prevent="login">
          <div class="form-group">
            <input type="email" v-model="auth.email" placeholder="E-mail address"></input>
            <br>
            <input type="password" v-model="auth.password" placeholder="password"></input>
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <!-- Do I need sth here? -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'auth',
  props: ['tryLogin'],
  data: function () {
    return ({
      auth: {
        email: '',
        password: ''
      }
    })
  }
}
</script>
  