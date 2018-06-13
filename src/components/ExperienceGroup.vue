<template>
  <div>
    <h3>{{ title }}</h3>

    <div class="resume-icon"><i :class="icon"></i></div>
    <div class="resume-item" v-for="post in posts">
      <div class="year">{{ post.meta.year }}</div>
      <div class="resume-description">
        <strong class="group-name" v-html="post.title"></strong>
      </div>
      <div v-html="post.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExperienceGroup',
    props: ['icon', 'posts', 'title']
  }
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

  .position {
    position: relative;
  }

  .resume-icon {
    margin-bottom: 25px;

    i {
      font-size: 4rem;
      color: map-get($colors, secondary);
    }
  }

  .resume-item {
    margin-bottom: 25px;

    p {
      font-size: 1.5rem;
      margin-top: 0;
    }

    .resume-description {
      font-size: 1.7rem;
    }

    .year {
      font-weight: 600;
      margin-bottom: 5px;
    }
  }

  .group-name {
    color: map-get($colors, secondary);
  }
</style>
