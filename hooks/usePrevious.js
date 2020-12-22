import { useRef, useEffect } from 'react'

/**
 * @hook Save the value of the previous render
 *
 * @param {any} value - Value to save the previous value of
 * @returns {any} prev - Value during the previous render
 */
export const usePrevious = (value) => {
  const prev = useRef()
  useEffect(() => {
    prev.current = value
  })
  return prev.current
}

export default usePrevious
