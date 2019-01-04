const { useEffect, useState, useRef } = require('react')

const useElementCallback = callback => {
  const ref = useRef()
  const onRefValue = () => (ref.current ? callback(ref.current) : undefined)

  useEffect(onRefValue, [ref.current])

  return ref
}

const useElement = defaultValue => {
  const [elem, setElem] = useState(defaultValue)
  const ref = useElementCallback(setElem)

  return [ref, elem]
}

module.exports = { useElementCallback, useElement }
