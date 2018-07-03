<template>
  <div>
    <BtnMenu @click.native="isMenuVisible = !isMenuVisible" :active="isMenuVisible"/>
    <transition name="fade">
      <nav class="nav-bar" v-if="isMenuVisible" @click="scrolling">
        <ul @click="isMenuVisible = !isMenuVisible">
          <li><AnimateWhenVisible name="fadeUp"><a href="#about">About Me<span></span></a></AnimateWhenVisible></li>
          <li><AnimateWhenVisible name="fadeUp" :duration="1.3"><a href="#experience">Experience<span></span></a></AnimateWhenVisible></li>
          <li><AnimateWhenVisible name="fadeUp" :duration="1.6"><a href="#portfolio">Portfolio<span></span></a></AnimateWhenVisible></li>
          <li><AnimateWhenVisible name="fadeUp" :duration="1.8"><a href="#contact">Contact<span></span></a></AnimateWhenVisible></li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
  import BtnMenu from './BtnMenu'
  import { animate } from '../utils'

  export default {
    name: 'AppMenu',
    components: {
      BtnMenu
    },
    data: () => ({
      isMenuVisible: false,
      animation: null
    }),
    methods: {
      scrolling(event) {
        event.preventDefault()

        if (this.animation) {
          this.animation.cancel()
        }

        const href = event.target.getAttribute('href')
        const scrollToEl = document.querySelector(href)
        const pageY = window.pageYOffset

        this.animation = animate({
          duration: 600,
          easing: p => p < .5 ? 4 * Math.pow(p, 3) : 4 * Math.pow(p - 1, 3) + 1,
          draw(progress) {
            window.scrollTo(0, pageY + progress * (scrollToEl.offsetTop - pageY))
          },
          done() { location.hash = href }
        })
      },
    }
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
