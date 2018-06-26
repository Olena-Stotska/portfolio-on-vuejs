<template>
  <div>
    <h3>{{ post.title }}</h3>
    <h3 class="personal-header">{{ userName }}</h3>
    <div class="info email"><strong>E-mail:</strong> {{ post.meta.email }}</div>
    <div class="info"><strong>Skype:</strong> {{ post.meta.skype }}</div>
    <div class="info"><strong>Phone Number:</strong> {{ post.meta.phone }}</div>
    <div class="info"><strong>City:</strong> {{ post.meta.city }}</div>

    <Social :items="post.meta.font_awesome"/>
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

<style scoped lang="scss">
@import '@/styles/variables.scss';

.info {
  margin-bottom: 10px;
}

.email {
  color: map-get($colors, primary);

  strong {
    color: lighten($text-color, 30%);
  }
}
</style>
