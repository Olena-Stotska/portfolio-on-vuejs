import Vue from 'vue'

Vue.directive('validity', {
  bind(el, binding, vnode) {
    const listener = (event) => {
      if (event.type === 'invalid') {
        event.preventDefault()
      }

      const value = el.validity.valid
      vnode.context.$data[binding.expression] = value
    }

    el.dataset.listener = listener
    el.addEventListener('invalid', listener)
    el.addEventListener('input', listener)
  },
  unbind(el) {
    el.removeEventListener('invalid', el.dataset.listener)
    el.removeEventListener('input', el.dataset.listener)
  }
})
