<template>
  <v-container
    fill-height
    fluid
    class="home-container"
  >
    <v-row
      class="justify-sm-center"
      justify="center"
      align="center"
    >
      <v-col
        class="login"
        cols="4"
      >
        <v-card>Login</v-card>
      </v-col>
      <v-col
        cols="4"
        class="register"
      >
        <v-card>Register</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
