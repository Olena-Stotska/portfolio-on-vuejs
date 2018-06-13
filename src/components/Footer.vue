<template>
  <footer class="footer">
    <div>&copy; 2017 Olena Stotska</div>
    <Social :items="groupedPosts['personal-information'].meta.social_url"/>
  </footer>
</template>

<script>
  import { group } from '../utils'
  import Social from './Social'

  export default {
    name: 'Footer',
    props: ['posts'],
    components: {
      Social
    },
    computed: {
      groupedPosts() {
        return group(this.posts)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

  $bg-footer: map-get($colors, dark) !default;

  .footer {
    padding: 15px 30px;
    background-color: $bg-footer;
    color: map-get($colors, light);

    .social-wrap {
      float: right;

      i {
        font-size: 2.4rem;

        &:hover {
          color: map-get($colors, light);
        }
      }
    }
  }
</style>
