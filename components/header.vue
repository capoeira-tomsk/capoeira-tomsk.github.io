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
        <ul class="navbar-right social-links">
          <li><a href="https://vk.com/capoeiratomsk"><i class="fa fa-vk"></i></a></li>
          <li><a href="https://www.instagram.com/capoeiratomsk/"><i class="fa fa-instagram"></i></a></li>
          <li><a href="tel:+7-903-955-63-53"><i class="fa fa-phone"></i></a></li>
        </ul>
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