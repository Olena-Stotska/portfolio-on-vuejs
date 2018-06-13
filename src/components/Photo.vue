<template>
  <div>
    <h3>Photo</h3>
    <div class="person">
      <a class="me-photo" href="../assets/img/photo.jpeg">
        <img src="../assets/img/photo.jpeg" alt="Alt"/>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Photo',
    props: ['posts']
  }
</script>

<style scoped lang="scss">
  .person {

    a:focus {
      outline: none;
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      display: inline-block;
    }
  }
</style>
