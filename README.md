# use-element

React hook to use DOM element

## Usage

```js
const MyComponent = props => {
  const [ref, elem] = useElement(null)

  if (elem !== null) {
    // do something with your elem
  }

  return <div ref={ref}>{props.children}</div>
}
```

`useElem` combines `useRef`, `useEffect` and `useState`. It uses `useRef` to create a reference. Then, it uses a `useEffect` to retrieve the ref current value and set it in your state.\
It enable you to use directly you element.
