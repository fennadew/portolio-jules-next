import { useRef, useCallback, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

/**
 * @hook Observe elements to report changes of the elements dimensions
 *
 * @param {function} callback - Callback when dimensions have changed
 * @returns {function} Callback to set the ref
 */

const callbackMap = new Map()
const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const callback = callbackMap.get(entry.target)
    if (typeof callback === 'function') {
      callback(entry)
    }
  })
})

const useResizeObserver = (callback) => {
  const nodeRef = useRef(null)
  const cleanUp = useCallback(() => {
    if (nodeRef.current !== null) {
      observer.unobserve(nodeRef.current)
      callbackMap.delete(nodeRef.current)
    }
  }, [])

  const setRef = useCallback(
    (node) => {
      if (node === null) {
        if (nodeRef.current !== null) {
          callbackMap.delete(nodeRef.current)
        }
      } else {
        if (node !== nodeRef.current) {
          cleanUp()

          nodeRef.current = node
          observer.observe(nodeRef.current)
        }

        callbackMap.set(nodeRef.current, callback)
      }
    },
    [callback, cleanUp]
  )

  useEffect(() => cleanUp, [cleanUp])

  return setRef
}

export default useResizeObserver
