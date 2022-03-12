<template>
  <v:header xmlns:v></v:header>
  <component :is="main"></component>
  <v:footer xmlns:v></v:footer>
</template>

<script>

const routes = ['articles'];

export default {

  data() {
    return {
      hash: location.hash
    }
  },
  computed: {
    main() {
      const i = routes.indexOf(this.hash.replace('#', ''));
      return `v:${i >= 0 ? routes[i] : 'main'}`;
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.hash = window.location.hash
    });
  }
}
</script>