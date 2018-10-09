<template>
  <div v-if="user">
  <a href="javascript:history.back()">Back</a>
  <h1>{{user.name}}</h1>
  <dl>
    <dt>username</dt>
    <dd>{{user.username}}</dd>
    <dt>email</dt>
    <dd>{{user.email}}</dd>
    <dt>phone</dt>
    <dd>{{user.phone}}</dd>
    <dt>website</dt>
    <dd>{{user.website}}</dd>
    <dt>Address</dt>
    <dd>{{user.address.street}} {{user.address.suite}} {{user.address.city}} {{user.address.zipcode}}</dd>
    <dt>Company</dt>
    <dd>{{user.company.name}} <em>"{{user.company.catchPhrase}}"</em></dd>
  </dl>
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

<style>
  dt {
    font-weight:700;
    font-size:1.1rem;
    margin-top:0.75em;
  }
  dd {
    font-size:1.5rem;
  }
</style>
