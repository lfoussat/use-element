"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useElement = exports.useElementCallback = undefined;

var _react = require("react");

const useElementCallback = exports.useElementCallback = callback => {
  const ref = (0, _react.useRef)();

  const onRefValue = () => ref.current ? callback(ref.current) : undefined;

  (0, _react.useEffect)(onRefValue, [ref.current]);
  return ref;
};

const useElement = exports.useElement = defaultValue => {
  const [elem, setElem] = (0, _react.useState)(defaultValue);
  const ref = useElementCallback(setElem);
  return [ref, elem];
};
