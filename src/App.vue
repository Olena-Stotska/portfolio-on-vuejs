<template>
  <transition name="fade" tag="div" class="wrapper">
    <div class="wrapper" v-if="isLoaded" key="app">
      <FrontPage :user="user"/>
      <AboutMe :category="categories['about-me']" :posts="posts['about-me']" :user="user"/>
      <Experience :category="categories.experience" :posts="posts"/>
      <Portfolio :category="categories.portfolio" :posts="posts.portfolio"/>
      <Contacts :category="categories.contact" :posts="posts['about-me']"/>
      <Footer :posts="posts['about-me']"/>
    </div>

    <div class="loader wrapper" v-else key="loader">
     <div class="spinner-loader"></div>
    </div>
  </transition>
</template>

<script>
import { group } from './utils'
import FrontPage from './components/FrontPage'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const API_BASE_URL = 'http://portfolio.freaksidea.com/wp-json'
const API_URL = `${API_BASE_URL}/wp/v2`

export default {
  name: 'app',
  components: {
    FrontPage,
    AboutMe,
    Experience,
    Portfolio,
    Contacts,
    Footer,
  },
  data: () => ({
    isLoaded: false,
    categories: {},
    user: {},
    posts: {},
  }),

  methods: {
    getName() {
      return fetch(API_BASE_URL)
        .then(response => response.json())
        .then(({ name, description }) => {
          this.user = { name, description }
        })
    },

    getCategories() {
      return fetch(`${API_URL}/categories`)
        .then(response => response.json())
    },

    getPosts() {
      return fetch(`${API_URL}/posts?per_page=20`)
        .then(response => response.json())
    },

    groupPosts(posts, categories) {
      const categoriesById = group(categories, 'id')

      return posts.reduce((acc, post) => {
        post.categories.forEach((categoryId) => {
          const key = categoriesById[categoryId].slug
          acc[key] = acc[key] || []
          acc[key].push(post)
        })

        return acc
      }, {})
    },
  },

  created() {
    document.body.classList.add('loading')
    Promise.all([
      this.getCategories(),
      this.getPosts(),
      this.getName(),
    ]).then(([categories, posts]) => {
      this.categories = group(categories)
      this.posts = this.groupPosts(posts, categories)
      this.isLoaded = true
      this.$nextTick(() => document.body.classList.remove('loading'))
    })
  },
}
</script>

<style scoped lang="scss">
$spinner-loader-color: rgba(#003, 0.3) !default;

.wrapper {
  height: 100%;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}


@keyframes spinner-loader {
  0%   {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

.spinner-loader {
  animation: spinner-loader 1500ms infinite linear;

  border-radius: 0.5em;
  box-shadow: $spinner-loader-color 1.5em 0 0 0,
    $spinner-loader-color 1.1em 1.1em 0 0,
    $spinner-loader-color 0 1.5em 0 0,
    $spinner-loader-color -1.1em 1.1em 0 0,
    $spinner-loader-color -1.5em 0 0 0,
    $spinner-loader-color -1.1em -1.1em 0 0,
    $spinner-loader-color 0 -1.5em 0 0,
    $spinner-loader-color 1.1em -1.1em 0 0;
  display: inline-block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin: 1.5em;
  overflow: hidden;
  text-indent: 100%;
}
</style>
