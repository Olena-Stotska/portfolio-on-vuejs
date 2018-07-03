export function group(items, field = 'slug') {
  return items.reduce((acc, item) => {
    acc[item[field]] = item

    return acc
  }, {})
}

window.requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  (fn => setTimeout(fn, 16))
window.cancelAnimationFrame = window.cancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  clearTimeout

export function animate(options) {
  const start = typeof performance === 'undefined' ? Date.now() : performance.now()
  let animationId
  const animation = { cancel: () => animationId && cancelAnimationFrame(animationId) }

  animationId = requestAnimationFrame(function animate(time) {
    const currentTime = time || Date.now()
    let timeFraction = (currentTime - start) / options.duration;

    if (timeFraction > 1) {
      timeFraction = 1
    }

    options.draw(options.easing(timeFraction));

    if (timeFraction < 1) {
      animationId = requestAnimationFrame(animate);
    } else {
      options.done()
    }
  });

  return animation
}
