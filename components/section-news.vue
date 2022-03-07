<template>
  <section class="news" id="news">
    <div class="container">
      <div class="row">
        <div class="col4"></div>
        <div class="col8">
          <div id="vk-news" class="widget-vk"></div>
        </div>
      </div>
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