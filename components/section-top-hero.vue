<template>
  <section class="top-hero">
    <ul>
      <li v-for="i in slides" :class="{active: i === active, next: i === next, prev: i === prev}">
        <img :src="`img/img${i < 10 ? '0' + i.toString() : i}.jpg`">
      </li>
    </ul>
    <div class="container">
      <div class="title">
        <h2><em>Учебный сезон открыт!</em></h2>
        <p>Набор детей 5-7, 9-10 и 12+ лет в зал Сибирская 64/1.<br>Хватит сидеть дома!</p>
        <a href="#contacts" class="btn primary">Записаться</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      next: 0,
      prev: 0,
      slides: 11
    }
  },
  mounted() {
    this.prev = this.slides;
    this.next = 2;
    const interval = 8000;
    const increment = () => {
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
      setTimeout(increment, interval);
    }
    setTimeout(increment, interval);
  }
}
</script>