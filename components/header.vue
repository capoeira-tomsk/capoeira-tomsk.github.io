<template>
  <header :class="{scrolled, open}">
    <div class="container">
      <nav>
        <a href="#" class="navbar-brand" @click="close"><img class="brand-icon" src="img/brand-icon.png"/></a>
        <span></span>
        <ul class="navbar-collapse" :class="{open}">
          <li><a href="#about" @click="close">Капоэйра</a></li>
          <li><a href="#coach" @click="close">Тренер</a></li>
          <li><a href="#schedule" @click="close">Расписание</a></li>
          <li><a href="#news" @click="close">Новости</a></li>
          <li><a href="#articles" @click="close">Статьи</a></li>
        </ul>
        <v:social-links xmlns:v class="navbar-right"></v:social-links>
        <button type="button" class="navbar-toggle" :class="{open}" @click="open = !open">
          <i></i><i></i><i></i>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      open: false
    }
  },
  methods: {
    close() {
      this.open = false;
    }
  },
  mounted() {
    const checkScroll = () => {
      this.scrolled = window.scrollY > 100;
      this.open = false;
    }
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll();
  }
}
</script>