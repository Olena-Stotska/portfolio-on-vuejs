<template>
  <div class="wrapper">
    <template v-if="isLoaded">
      <FrontPage :user="user"/>
      <AboutMe :category="categories['about-me']" :posts="posts['about-me']" :user="user"/>
      <Experience :category="categories.experience" :posts="posts"/>
      <Portfolio :category="categories.portfolio" :posts="posts.portfolio"/>
      <Contacts :category="categories.contact" :posts="posts['about-me']"/>
      <Footer :posts="posts['about-me']"/>
    </template>
  </div>
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
    Promise.all([
      this.getCategories(),
      this.getPosts(),
      this.getName(),
    ]).then(([categories, posts]) => {
      this.categories = group(categories)
      this.posts = this.groupPosts(posts, categories)
      // console.log(this.posts)
      this.isLoaded = true
    })
  },
}
</script>

<style scoped lang="scss">
  .wrapper {
    height: 100%;
  }
</style>
