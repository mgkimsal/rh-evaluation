<template>
  <router-link :to="{ name: 'user', params: { id: userData.id }}">
    <div>{{userData.name}} | {{userData.username}} | {{userData.email}} | {{userData.address}}</div>
  </router-link>
</template>

<script>
export default {
  name: "User",
  props: ['userData']
};
</script>
