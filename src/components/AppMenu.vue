<template>
  <div>
    <BtnMenu @click.native="isMenuVisible = !isMenuVisible"/>
    <nav class="nav-bar" v-show="isMenuVisible">
      <ul>
        <li><a href="#about">About Me<span></span></a></li>
        <li><a href="#cv">CV<span></span></a></li>
        <li><a href="#portfolio">Portfolio<span></span></a></li>
        <li><a href="#contact">Contact<span></span></a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import BtnMenu from './BtnMenu'

  export default {
    name: 'AppMenu',
    components: {
      BtnMenu
    },
    data: () => ({
      isMenuVisible: false
    })
  }
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

$text-nav-bar: map-get($colors, light) !default;

.nav-bar {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  right: 0;
  top: 0;

  >span {
    display: block;
  }

  ul {
    margin-top: 120px;
    text-align: center;
    padding: 0;
    // @include animation-duration(.5s);

    // >li {

    //   &:nth-child(1) a {
    //     @include animation-delay(.1s);
    //   }

    //   &:nth-child(2) a {
    //     @include animation-delay(.2s);
    //   }

    //   &:nth-child(3) a {
    //     @include animation-delay(.3s);
    //   }

    //   &:nth-child(4) a {
    //     @include animation-delay(.4s);
    //   }
    // }
  }

  li {

    &:hover {
      background-color: rgba(255, 255, 255, 0.09);
      transition: all 0.5s ease-out;
    }

    a {
      font-weight: bold;
      font-size: 1.8rem;
      display: block;
      padding: 20px 0;
      text-transform: uppercase;
      color: $text-nav-bar;
      transition: all 0.5s ease-out;

      &:hover {
        color: map-get($colors, secondary);
      }
    }
  }
}
</style>
