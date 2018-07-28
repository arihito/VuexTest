<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ message }}</p>
    <router-view/>
    <EditForm />
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'
export default {
  name: 'app',
  components: { EditForm },
  computed: {
    message() { return this.$store.getters.message }
  }
}
</script>

<style>
:root {
  background: linear-gradient(#222,#111);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app img {
  width: 10%;
}
</style>
