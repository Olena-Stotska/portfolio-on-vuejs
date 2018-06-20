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
            <form @submit="validateForm" action="http://formspree.io/I.olena.stotska@gmail.com" target="_blank" method="post" novalidate="true">
              <label class="form-group">
                <span class="star-required">*</span> Name:
                <input type="text" name="name" v-model="name" placeholder="Your name"/>
                <div class="errors-block">{{ errorName }}</div>
              </label>
              <label class="form-group">
                <span class="star-required">*</span> E-mail:
                <input type="email" name="email" v-model="email" placeholder="Your E-mail"/>
                <div class="errors-block">{{ errorEmail }}</div>
              </label>
              <label class="form-group">
                <span class="star-required">*</span> Your message:
                <textarea name="message" v-model="message" placeholder="Your message"></textarea>
                <div class="errors-block">{{ errorMessage }}</div>
              </label>
              <button class="btn-sent" type="submit">Send</button>
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
    errorName: '',
    errorEmail: '',
    errorMessage: '',
    name: null,
    email: null,
    message: null,
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
    validateForm: function(event) {

      if (!this.name) {
        this.errorName = 'Please, enter Your name!'
      }

      if (!this.email) {
        this.errorEmail = 'Please, enter Your email!'
      } else if (!this.validEmail(this.email)) {
        this.errorEmail = 'Valid email required.'
      }

      if (!this.message) {
        this.errorMessage = 'Please, enter Your message!'
      }

      if (this.name && this.email && this.message) {
        return true
      }

      event.preventDefault()
    },
    validEmail: function (email) {
      const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regEx.test(email)
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

    input,
    textarea {
      display: block;
      width: 100%;
      border: 1px solid lighten($bg-contact, 60%);
      margin-top: 5px;
      line-height: 4rem;
      text-indent: 1rem;
      font-size: 1.2rem;
      outline: none;
      background-color: transparent;
    }
  }
</style>
