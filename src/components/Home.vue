<template>
  <v-container
    fill-height
    fluid
    class="home-container"
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        class="login"
        cols="4"
      >
        <v-card>
          Login
          <div class="field-container">
            <v-text-field 
              v-model="loginEmail"
              placeholder="Email"
            />
            <v-text-field 
              v-model="loginPassword"
              placeholder="Password"
            />
            <v-btn @click="login">Login</v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="register"
      >
        <v-card>
          <div>Register</div>
          <div class="field-container">
            <v-text-field 
              v-model="registerEmail"
              placeholder="Email"
            />
            <v-text-field 
              v-model="registerPassword"
              placeholder="Password"
            />
            <v-btn @click="register">Register</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      registerEmail: '',
      registerPassword: '',
      loginEmail: '',
      loginPassword: ''
    };
  },
  methods: {
    register(){

    },
    login(){
      
    }
  }
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

.field-container{
  margin: 10px;
}
</style>
