<template>
  <section id="portfolio" class="my-portfolio position">
    <Title :title="category.name" :description="category.description"/>

    <div class="section-content">
      <div class="portfolio-table controls">
        <ul class="breadcrumbs">
          <li class="filter" :class="{ active: isFiltered('all') }" @click="filter('all')">All work</li>
          <li class="filter" :class="{ active: isFiltered('blog') }" @click="filter('blog')">Blogs</li>
          <li class="filter" :class="{ active: isFiltered('shop') }" @click="filter('shop')">Internet Shop</li>
        </ul>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-4 col-lg-auto portfolio-item" v-for="post in filteredPosts">
          <img :src="post.media_url" alt="Alt"/>
          <div class="portfolio-link">
            <a :href="post.meta.site_url" class="popup_content" target="_blank">See</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Title from './Title'

  export default {
    name: 'Portfolio',
    props: ['category', 'posts'],
    components: {
      Title
    },
    data() {
      return {
        currentFilter: 'all'
      }
    },
    computed: {
      filteredPosts() {
        if (this.currentFilter === 'all') {
          return this.posts
        }

        return this.posts.filter(post => post.tags && post.tags.includes(this.currentFilter))
      }
    },
    methods: {
      isFiltered(name) {
        return this.currentFilter === name
      },

      filter(name) {
        this.currentFilter = name
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

  $bg-portfolio: map-get($colors, dark) !default;
  $btn: map-get($colors, secondary) !default;

  .my-portfolio {
    background-color: $bg-portfolio;
    color: map-get($colors, light);
  }

  /deep/ .text-wrapper {
    &:after {
      border-bottom: 1px solid map-get($colors, light);
    }
  }

  .breadcrumbs {
    text-align: center;

    li {
      display: inline-block;
      text-transform: uppercase;
      margin: 0 10px;
      color: lighten($bg-portfolio, 60%);
      cursor: pointer;

      &.active {
        color: map-get($colors, light);
        border-bottom: 1px solid $btn;
      }
    }
  }

  .portfolio-table {
    margin-bottom: 50px;
  }

  .portfolio-item {
    width: 300px;
    max-height: 250px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      width: 100%;
    }
  }

  .portfolio-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
    text-align: center;
    padding-top: 60%;
    opacity: 0;
    transition: all .5s ease-out;

    &:hover {
      opacity: 1;
      padding-top: 30%;
    }

    a {
      background-color: transparent;
      border: 1px solid $btn;
      padding: 10px 35px;
      font-weight: 600;
      font-size: 2rem;
      display: inline-block;
      transition: all 0.5s sceal-out;

      &:hover {
        color: lighten($btn, 30%);
      }
    }
  }
</style>
