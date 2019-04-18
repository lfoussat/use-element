import { useEffect, useState, useRef } from 'react'

export const useElementCallback = callback => {
  const ref = useRef()

  useEffect(() => ref.current && callback(ref.current), [ref.current || {}])

  return ref
}

export const useElement = defaultValue => {
  const [elem, setElem] = useState(defaultValue)
  const ref = useElementCallback(setElem)

  return [ref, elem]
}
