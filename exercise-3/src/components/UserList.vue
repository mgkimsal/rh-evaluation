<template>
  <div id="app">
    <h1>Yo, Users.</h1>
    <table>
    <tr v-for="user in users" :key="user.id" :userData="user" >
      <td><router-link :to="{name: 'user', params: {id: user.id}}">{{user.name}}</router-link></td>
      <td>{{user.username}}</td>
      <td>{{user.email}}</td>
      <td>{{user.address.street}} {{user.address.suite}} {{user.address.city}} {{user.address.zipcode}}</td>
    </tr>
    </table>
  </div>
</template>

<script>
import UserMini from "./UserMini";

export default {
  name: "App",
  components: {
    UserMini
  },
  computed: {
    users() {
      return this.$store.state.users.sort( function nameDescending(a,b) {
        return a.name < b.name;
      });
    }
  }
};
</script>

<style>
td {
  text-align:left;
}
</style>
