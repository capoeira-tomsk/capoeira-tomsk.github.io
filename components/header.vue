<template>
  <header :class="{'scrolled': scrolled}">
    <div class="container">
      <nav>
        <div class="navbar-header">
          <a href="#" class="navbar-brand"><img class="brand-icon" src="img/brand-icon.png"/></a>
          <!--          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">-->
          <!--            <i class="fa fa-bars"></i>-->
          <!--          </button>-->
        </div>
        <ul class="navbar-collapse" id="#navbar">
          <li><a href="#capoeira">Капоэйра</a></li>
          <li><a href="#coach">Тренер</a></li>
          <li><a href="#schedule">Расписание</a></li>
          <li><a href="#news">Новости</a></li>
          <li><a href="articles.html">Статьи</a></li>
        </ul>
        <v:social-links xmlns:v class="navbar-right"></v:social-links>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },
  mounted() {
    const checkScroll = () => {
      this.scrolled = window.scrollY > 100;
    }
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  }
}
</script>