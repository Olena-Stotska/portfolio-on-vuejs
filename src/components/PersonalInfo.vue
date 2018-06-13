<template>
  <div>
    <h3>{{ post.title }}</h3>
    <h3 class="personal-header">{{ userName }}</h3>
    <div v-html ="post.content"></div>

    <Social :items="post.meta.social_url"/>
  </div>
</template>

<script>
  import Social from './Social'

  export default {
    name: 'PersonalInfo',
    props: ['post', 'userName'],
    components: {
      Social
    }
  }
</script>
