import { useEffect, useRef, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useEffectOnClickOutsideRef = (ref, callback) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

/**
 * A div that calls a callback when you click outside of it.
 * @param {*} props
 * @returns
 */
const DivWithOutsideClickCallback = (props) => {
  const wrapperRef = useRef(null);
  useEffectOnClickOutsideRef(wrapperRef, props.callback);

  return <div ref={wrapperRef}>{props.children}</div>;
};

/**
 * Source: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
 *
 * Use width and height of viewport inside a component. Example:
 * ```
 * const Component = () => {
 *   const { height, width } = useWindowDimensions();
 *
 *   return (
 *     <div>
 *       width: {width} ~ height: {height}
 *     </div>
 *   );
 * }
 * ```
 */
const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return [windowDimensions, setWindowDimensions, getWindowDimensions];
};

export {
  DivWithOutsideClickCallback, useEffectOnClickOutsideRef, useWindowDimensions
};

