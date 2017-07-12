<template>
  <div>
    <h2>{{message}} {{name}}</h2>
    <button @click="changeName"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello',
      name: 'World'
    }
  },
  methods: {
    changeName() {
      this.name = 'Vue'
    }
  }
}
</script>

<style scoped>

</style>
