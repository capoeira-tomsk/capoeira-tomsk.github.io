<template>
  <section class="vk-members">
    <div class="container">
      <div class="row">
        <div class="col6">
          <h2>Присоединяйтесь<br>к нам в <i class="fa fa-vk"></i>!</h2>
        </div>
        <div class="col6">
          <div id="vk-members" class="widget-vk"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    VK.Widgets.Group("vk-members", {mode: 3, width: "auto", color1: 'F1C909', color2: '201C20', color3: '725A1C'}, 133258069);
  }
}
</script>

