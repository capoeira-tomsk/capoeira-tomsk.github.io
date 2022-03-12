<template>
  <main xmlns:v>
    <v:section-top-hero></v:section-top-hero>
    <v:section-info></v:section-info>
    <v:section-vk-members></v:section-vk-members>
    <v:section-coach></v:section-coach>
    <v:section-schedule></v:section-schedule>
    <v:section-news></v:section-news>
  </main>
</template>

<script>
export default {
  mounted() {
    const hash = (location.hash || '').replace('#', '');
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        const rect = section.getBoundingClientRect();
        window.scrollTo({top: document.body.scrollTop + rect.top});
      }
    }
  }
}
</script>