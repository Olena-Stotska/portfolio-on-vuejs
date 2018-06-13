<template>
  <div>
    <h3>{{ post.title }}</h3>
    <div class="first-paragraph" v-html="post.content"></div>
  </div>
</template>

<script>
  export default {
    name: 'Description',
    props: ['post']
  }
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

  .first-paragraph {
    /deep/ p:first-child {
      color: map-get($colors, secondary);
    }
  }
</style>
