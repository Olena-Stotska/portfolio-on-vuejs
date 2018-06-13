<template>
  <section id="contact" class="position">
    <Title :title="category.name" :description="category.description"/>
    <div class="section-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="contact-box">
              <i class="fa fa-location-arrow"></i>
              <h3>Адрес:</h3>
              <p>Ukrain, Kyiv city</p>
            </div>
            <div class="contact-box">
              <i class="fa fa-mobile"></i>
              <h3>Телефон:</h3>
              <p>+38 (о95) 47 326 о7</p>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <form action="http://formspree.io/I.olena.stotska@gmail.com" class="main-form" target="-blank" method="post">
              <label class="form-group">
                <span class="star-required">*</span> Name:
                <input type="text" name="name" placeholder="Your name" data-validation-required-message="You don't entered name" required/>
              </label>
              <label class="form-group">
                <span class="star-required">*</span> E-mail:
                <input type="email" name="email" placeholder="Your E-mail" data-validation-required-message="E-mail is not available" required/>
              </label>
              <label class="form-group">
                <span class="star-required">*</span> Your message:
                <textarea name="message" placeholder="Your message" data-validation-required-message="You don't entered message" required></textarea>
              </label>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from './Title'

export default {
  name: 'Contacts',
  props: ['category'],
  components: {
    Title
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
      color: map-get($colors, secondary);
    }

    p {
      margin-top: 5px;
    }
  }

  .main-form {

    button {
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

      &:focus {
        outline: none;
      }
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
      background-color: transparent;
    }
  }
</style>
