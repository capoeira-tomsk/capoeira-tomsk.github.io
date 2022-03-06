<template>
  <main>Main {{ count + 10 }}</main>
  <input type="number" v-model="count">
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>