<template>
  <section class="news">
    <a class="anchor" id="news"></a>
    <div class="container">
      <div id="vk-news" class="widget-vk"></div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    VK.Widgets.Group("vk-news", {mode: 4, wide: 1, width: "auto", height: window.innerHeight, color1: 'FFFFFF', color2: '201C20', color3: '725A1C'}, 133258069);
  }
}
</script>