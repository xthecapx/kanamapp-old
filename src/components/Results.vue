<template>
  <div class="results">
    <div class="alert alert-success text-center">
        <h2>Your score!</h2>
    </div>
    <div class="container">
      <h2>Your fails!</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>EN</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="error in getErrors">
            <td>{{error.question}}</td>
            <td>{{error.answer}}</td>
            <td>{{error.en}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters(['getErrors']),
  }
</script>