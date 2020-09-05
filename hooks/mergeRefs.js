const mergeRefs = (...refs) => (el) => {
  refs.forEach((ref) => {
    if (typeof ref === `function`) {
      ref(value)
    } else if (typeof ref === 'object' && ref !== null) {
      ref.current = el
    }
  })
}
export default mergeRefs
