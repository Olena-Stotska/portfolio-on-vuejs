<template>
  <section id="contact" class="position">
    <Title :title="category.name" :description="category.description"/>

    <div class="section-content">
      <div class="row">
          <div class="col-12 col-md">
            <div class="contact-box">
              <i :class="personalInfo.meta.phone_icon"></i>
              <h3>Phone Number:</h3>
              <p>{{ personalInfo.meta.phone }}</p>
            </div>
            <div class="contact-box">
              <i :class="personalInfo.meta.adress_icon"></i>
              <h3>Adress:</h3>
              <p>{{ personalInfo.meta.city }}</p>
            </div>
          </div>

          <div class="col-md-6 col-sm-6">
            <form @submit="formSubmited" action="http://formspree.io/I.olena.stotska@gmail.com" target="_blank" method="post">
              <label class="form-group">
                <span class="star-required">*</span> Full Name:
                <input v-model="name" v-validity="isValidName" required/>
                <div v-if="!isValidName">Please, enter Your Name!</div>
              </label>
              <label class="form-group">
                <span class="star-required">*</span> E-mail:
                <input type="email" v-model="email" v-validity="isValidEmail" required/>
                <div v-if="!isValidEmail">Please, enter Your E-mail!</div>
              </label>
              <label class="form-group">
                <span class="star-required">*</span> Your message:
                <textarea v-model="message" v-validity="isValidMessage" required></textarea>
                <div v-if="!isValidMessage">Please, enter Your Message!</div>
              </label>
              <button class="btn-sent">Send</button>
            </form>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import { group } from '../utils'
import Title from './Title'
import PersonalInfo from './PersonalInfo'

export default {
  name: 'Contacts',
  props: ['category', 'posts'],
  components: {
    Title,
    PersonalInfo,
  },
  data: () => ({
    name: '',
    email: '',
    message: '',
    isValidName: true,
    isValidEmail: true,
    isValidMessage: true
  }),
  computed: {
    groupedPosts() {
      return group(this.posts)
    },
    personalInfo() {
      return this.groupedPosts['personal-information']
    }
  },
  methods: {
    formSubmited() {
      setTimeout(() => {
        this.name = this.email = this.message = ''
      }, 100)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/variables.scss';

  $bg-contact: map-get($colors, dark) !default;

  #contact {
    background-color: lighten($bg-contact, 84.6%);

    .row {
      margin-top: 20px;
    }
  }

  .contact-box {
    margin: 30px 0;

    h3 {
      text-align: left;
      color: map-get($colors, dark);
      margin-bottom: 0px;
      font-size: 1.4rem;
    }

    i {
      font-size: 4rem;
      margin-left: -12px;
      color: map-get($colors, secondary);
    }

    p {
      margin-top: 5px;
    }
  }

  .errors-block {
    color: #f12b2b;
  }

  .btn-sent {
    border: none;
    color: #fff;
    line-height: 40px;
    padding: 0 25px;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 10px;
    float: right;
    background-color: map-get($colors, secondary);
    box-shadow: 0px 3px 3px rgba(0,0,0,0.6);

    &:active {
      margin-bottom: 2px;
      box-shadow: 0px 1px 3px rgba(0,0,0,0.6);
    }

    &:focus {
      outline: none;
    }
  }

  .form-group {
    display: block;
    margin-bottom: 20px;

    .star-required {
      font-weight: 900;
      font-size: 2rem;
      color: map-get($colors, secondary);
    }

    div {
      color: map-get($colors, error);
      margin-top: 5px;
    }

    input,
    textarea {
      display: block;
      width: 100%;
      border: 1px solid lighten($bg-contact, 60%);
      margin-top: 5px;
      line-height: 4rem;
      text-indent: 1rem;
      font-size: 1.4rem;
      outline: none;
      background-color: transparent;
    }
  }
</style>
