<template>
  <div>
    <h3>{{ post.title }}</h3>
    <h3 class="personal-header">{{ userName }}</h3>
    <div><strong>E-mail:</strong> {{ post.meta.email }}</div>
    <div><strong>Skype:</strong> {{ post.meta.skype }}</div>
    <div><strong>Phone Number:</strong> {{ post.meta.phone }}</div>
    <div><strong>City:</strong> {{ post.meta.city }}</div>

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
