import { useRef, useCallback, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const map = new Map()

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const { target } = entry
    const callback = map.get(target)
    callback && callback(entry)
  })
})

const useResizeObserver = (callback) => {
  const ref = useRef()
  const setRef = useCallback(
    (node) => {
      if (!node) {
        ref.current && map.delete(ref.current)
      } else {
        if (ref.current !== node) {
          if (ref.current) {
            observer.unobserve(ref.current)
            map.delete(ref.current)
          }
          observer.observe(node)
          ref.current = node
        }
        map.set(node, callback)
      }
    },
    [callback]
  )

  useEffect(() => {
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
        map.delete(ref.current)
        ref.current = false
      }
    }
  }, [])
  return setRef
}

export default useResizeObserver
