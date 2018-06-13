export function group(items, field = 'slug') {
  return items.reduce((acc, item) => {
    acc[item[field]] = item

    return acc
  }, {})
}
