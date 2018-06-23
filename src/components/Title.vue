<template>
  <AnimateWhenVisible name="fadeUp">
    <div class="caption">
      <h2>{{ title }}</h2>
      <div class="wrapper">
        <div class="text-wrapper">{{ description }}</div>
      </div>
    </div>
  </AnimateWhenVisible>
</template>

<script>
  export default {
    name: 'Title',
    props: [
      'title',
      'description'
    ]
  }
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

  .caption {
    text-align: center;

    h2 {
      font-size: 4rem;
      margin: 0;
      text-transform: uppercase;
    }
  }

  .text-wrapper {
    text-transform: uppercase;

    &:after {
      content: "";
      width: 150px;
      display: block;
      margin: 20px auto;
      border-bottom: 1px solid map-get($colors, dark);
    }
  }
</style>
