<template>
  <div>
  Just one user
  <p v-if="user">{{user.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  computed: {
    user() {
      let target = this.$route.params.id;
      return this.$store.state.users.find( function userbyID(user) {
        return user.id === target;
      });
    }
  }
}
</script>