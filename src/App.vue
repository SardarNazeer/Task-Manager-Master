<template>
  <main>
    <div class="container">
      <h1 class="title">Task Manager</h1>
      <div class="content">
        <sign-in v-show="!signedIn" :submitForm="submitForm" :logIn="logIn" />
        <task-list
          v-show="signedIn"
          :loggedInUserEmail="loggedInUserEmail"
          :newTask="newTask"
        />
      </div>
    </div>
  </main>
</template>

<script>
import TaskList from "./components/task-list.vue";
import SignIn from "./components/sign-in.vue";

export default {
  name: "task-manager",
  components: {
    "task-list": TaskList,
    "sign-in": SignIn,
  },
  data() {
    return {
      signedIn: false,
      loggedInUserEmail: "",
    };
  },
  methods: {
    async newTask(value) {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(value),
      });
    },
    async submitForm(value) {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(value),
      });
    },
    logIn(value) {
      this.loggedInUserEmail = value;
      if (this.loggedInUserEmail !== "") {
        this.signedIn = true;
      }
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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #4caf50;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.sign-in,
.task-list {
  width: 100%;
  max-width: 600px;
  margin: 1rem 0;
  padding: 1rem;
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.sign-in form,
.task-list form {
  display: flex;
  flex-direction: column;
}

.sign-in form input,
.task-list form input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.sign-in form button,
.task-list form button {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background: #4caf50;
  color: white;
  cursor: pointer;
}

.sign-in form button:hover,
.task-list form button:hover {
  background: #45a049;
}
</style>
