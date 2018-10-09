<template>
  <div id="app">
    <h1>Yo, Users.</h1>
    <UserMini v-for="user in users" :key="user.id" :userData="user" />
  </div>
</template>

<script>
import UserMini from "./UserMini";
//import { fetchJSON } from "../fetchJSON";

export default {
  name: "App",
  // data: () => ({
  //   users: [{ id: 0, name: "error" }]
  // }),
  components: {
    UserMini
  },
  computed: {
    users() {
      return this.$store.state.users.sort( function nameDescending(a,b) {
        return b.name - a.name;
      });
    }
  }
  // mounted() {
  //   this.updateUsers();
  //   console.log(this.users);
  // },
  // methods: {
  //   async updateUsers() {
  //     this.users = await fetchJSON(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //   }
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
