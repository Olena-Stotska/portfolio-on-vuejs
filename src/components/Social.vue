<template>
  <div class="social-wrap">
    <ul>
      <li v-for="social in socialUrls">
        <a :href="social.url" target="_blank">
          <i :class="social.icon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Social',
    props: ['items', 'user'],
    computed: {
      socialUrls() {
        return this.items.map((socialUrl) => {
          const [icon, url] = socialUrl.split(/\s*,\s*/)
          return { icon, url }
        })
      }
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

 .social-wrap {
    li {
      display: inline-block;
      margin-right: 10px;
    }

    i {
      font-size: 3rem;
    }
  }
</style>
