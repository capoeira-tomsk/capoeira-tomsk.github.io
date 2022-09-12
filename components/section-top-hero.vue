<template>
  <section class="top-hero">
    <ul>
      <li v-for="i in slides" :class="{active: i === active, next: i === next, prev: i === prev, animating}">
        <img :src="`img/hero${i}.jpg`">
      </li>
    </ul>
    <div class="container">
      <div class="title">
        <h2><em>Учебный сезон открыт!</em></h2>
        <p>Набор детей 5-7, 9-10 и 12+ лет в зал Сибирская 64/1.<br>Хватит сидеть дома!</p>
        <a href="tel:+7-903-955-63-53" class="btn primary">Записаться</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      animating: false,
      active: 1,
      next: 0,
      prev: 0,
      slides: 6
    }
  },
  mounted() {
    this.prev = this.slides;
    this.next = 2;
    const interval = 8000;
    const increment = () => {
      if (document.hidden) {
        return;
      }
      this.animating = true;
      this.active++;
      if (this.active > this.slides) {
        this.active = 1;
      }
      this.next = this.active + 1;
      this.prev = this.active - 1;
      if (this.next > this.slides) {
        this.next = 1;
      }
      if (this.prev < 1) {
        this.prev = this.slides;
      }
    }
    setInterval(increment, interval);
  }
}
</script>