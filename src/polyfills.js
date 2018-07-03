export default () => {
  if (typeof window.fetch !== 'function') {
    return import('whatwg-fetch')
  }

  return Promise.resolve()
}

