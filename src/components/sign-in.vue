<template>
  <div class="container">
    <div v-if="options" class="options">
      <button @click="signIn" class="btn">Sign In</button>
      <button @click="signUp" class="btn">Sign Up</button>
    </div>
    <div v-else>
      <div v-if="!signin" class="form-container">
        <h2>Sign Up</h2>
        <div class="form-group">
          <label for="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            v-model="first_name"
            class="input-field"
          />
          <label for="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            v-model="last_name"
            class="input-field"
          />
          <label for="email-signup">Email:</label>
          <input
            type="text"
            id="email-signup"
            v-model="email"
            class="input-field"
          />
          <button @click="formSubmission" class="btn">Submit</button>
        </div>
      </div>
      <div v-else class="form-container">
        <h2>Log In</h2>
        <div class="form-group">
          <label for="email-login">Email:</label>
          <input
            type="text"
            id="email-login"
            v-model="email"
            class="input-field"
          />
          <button @click="logIn(email)" class="btn">Log In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  props: ["submitForm", "logIn"],
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      signin: false,
      options: true,
    };
  },
  watch: {
    signin: {
      handler(val) {
        console.log(val);
      },
    },
  },
  methods: {
    formSubmission() {
      let ID = Math.random();
      this.submitForm({
        id: ID,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
      });
      this.signin = false;
      this.options = true;
    },
    signUp() {
      this.options = false;
      this.signin = false;
    },
    signIn() {
      this.options = false;
      this.signin = true;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: #f4f4f9;
  color: #333;
}

.container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.options {
  text-align: center;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
  background: #4caf50;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #45a049;
}

.form-container {
  text-align: left;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
}
</style>
