<template>
  <button class="btn-menu" @click="$refs.sandwich.classList.toggle('active')">
    <span class="sandwich" ref="sandwich">
      <span class="sw-topper"></span>
      <span class="sw-bottom"></span>
      <span class="sw-footer"></span>
    </span>
  </button>
</template>

<style scoped lang="scss">
.btn-menu {
  width: 55px;
  height: 55px;
  right: 0;
  position: fixed;
  z-index: 100;
  margin: 10px 30px;
  border: none;
  border-style: none;
  background: rgba(0, 0, 0, .6);
  -webkit-text-fill-color: transparent;

  &:active,
  &:focus {
    outline: none;
  }
}

.sandwich {
  width: 31px;
  height: 31px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 300;

  &.active {

    .sw-topper {
      top: 14px;
      transform: rotate(-45deg);
    }

    .sw-bottom {
      top: 10px;
      transform: rotate(45deg);
    }

    .sw-footer {
      opacity: 0;
      top: 0;
      transform: rotate(180deg);
    }
  }
}

.sw-topper,
.sw-bottom,
.sw-footer {
  position: relative;
  width: 100%;
  height: 3px;
  background: #fff;
  border: none;
  border-radius: 4px 4px 4px 4px;
  display: block;
}


.sw-topper {
  top: 5px;
  transition: transform 0.5s, top 0.2s,;
  transition-delay: 0.2s, 0s;
}

.sw-bottom {
  top: 12px;
  transition: transform 0.5s, top 0.2s;
}

.sw-footer {
  top: 20px;
  transition: all 0.5s;
  transition-delay: 0.1s;
}
</style>
