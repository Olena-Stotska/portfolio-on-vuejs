<template>
  <header class="header parallax position">
    <div class="container-page">
      <div class="logo">
        <img class="img-logo" src="../assets/img/logo.png">
      </div>
      <AppMenu />
    </div>

    <div class="name-block">
      <div class="title-text">
        <transition appear name="up-down">
          <div><h1>{{ user.name }}</h1></div>
        </transition>
        <transition appear name="down-up">
        <div><p>{{ user.description }}</p></div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
  import AppMenu from './AppMenu'

  export default {
    name: 'FrontPage',
    props: ['user'],
    components: {
      AppMenu
    }
  }
</script>


<style scope lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/animation.scss';

$text-nav-bar: map-get($colors, light) !default;

.up-down {
  @include up-down(up);
}

.down-up {
  @include up-down(down);
}

.header {
  padding: 20px;
  background-color: map-get($colors, dark);
}

.parallax {
  background-image: url("../assets/img/bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.logo {
  float: left;
  margin: 10px 30px;

  .img-logo {
    width: 60px;
  }
}

.name-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  margin: 0 auto;
  z-index: 400;

  .title-text {
    width: 250px;
  }

  h1 {
    font-size: 2.3rem;
    padding: 2px 10px;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid $text-nav-bar;
    color: $text-nav-bar;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin: 5px auto;
    color: $text-nav-bar;
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .name-block {

    .title-text {
      width: 55%;
    }

    h1 {
      font-size: 2.8rem;
      padding: 4% 8%;
    }

    p {
      font-size: 2rem;
    }
  }
}

@media(min-width: #{map-get($breakpoints, medium)}) {
  .name-block {

    .title-text {
      width: 450px;
    }

    h1 {
      font-size: 4rem;
      padding: 4% 10%;
    }

    p {
      font-size: 2.5rem;
    }
  }
}

@media only screen and (max-device-width: 1024px) {
  .parallax {
    background-attachment: scroll;
  }
}

</style>
