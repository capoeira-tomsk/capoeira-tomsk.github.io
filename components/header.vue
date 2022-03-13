<template>
  <header :class="{scrolled, open}">
    <div class="container">
      <nav>
        <a href="#" class="navbar-brand"><img class="brand-icon" src="img/brand-icon.png"/></a>
        <span></span>
        <ul class="navbar-collapse" :class="{open}">
          <li><a href="#about">Капоэйра</a></li>
          <li><a href="#coach">Тренер</a></li>
          <li><a href="#schedule">Расписание</a></li>
          <li><a href="#news">Новости</a></li>
          <li><a href="#articles">Статьи</a></li>
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