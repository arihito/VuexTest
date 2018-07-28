<template>
  <div class="edit-form">
    <input ref="input" :value="message" @input="doUpdate" />
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message() {
      return this.$store.getters.message
    },
    methods: {
      doUpdate() {
        this.$store.dispatch('doUpdate', this.$refs.input.value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
