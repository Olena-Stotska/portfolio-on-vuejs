<template>
  <section id="cv" class="my-cv position">
    <Title :title="category.name" :description="category.description" />

    <div class="section-content">
      <div class="container-fluid">
        <div class="row">
          <ExperienceGroup :posts="posts.works" class="col-12 col-md left" icon="icon-briefcase" title="Jobs"/>
          <ExperienceGroup :posts="posts.education" class="col-12 col-md right" icon="icon-graduation-cap" title="Education"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Title from './Title'
  import ExperienceGroup from './ExperienceGroup'

  export default {
    name: 'Experience',
    props: ['category', 'posts'],
    components: {
      Title,
      ExperienceGroup
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

  $linear: map-get($colors, dark);

  .row {
    padding-top: 20px;
    text-align: center;
  }

  @media(min-width: #{map-get($breakpoints, small)}) {

    .left {
      text-align: right;
      border-right: 2px solid lighten($linear, 80%);
    }

    .right {
      text-align: left;
    }
  }

</style>
