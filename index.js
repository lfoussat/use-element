import { useEffect, useState, useRef } from 'react'

export const useElementCallback = callback => {
  const ref = useRef()
  let _current = ref.current
  const onRefValue = () => {
    if (_current === ref.current) return
    _current = ref.current
    _current && callback(_current)
  }

  useEffect(onRefValue)

  return ref
}

export const useElement = defaultValue => {
  const [elem, setElem] = useState(defaultValue)
  const ref = useElementCallback(setElem)

  return [ref, elem]
}
