import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const transitionTime = 0.25;
const transitionDelay = 0;

const variants = {
  enter: {
    opacity: 0,
    transition: {
      duration: transitionTime,
      when: "beforeChildren",
    }
  },

  exit: {
    opacity: 0,
    transition: {
      duration: transitionTime,
      when: "afterChildren",
    }
  },


  normal: {
    opacity: 1,
    transition: {
      duration: transitionTime,
      delay: transitionDelay,
      when: "beforeChildren",
    }
  }
}

/**
 * Use this component as the wrapper for a React component
 * to have a smooth transition when the element is removed and added
 * to the React tree.
 * 
 * @param {children} The child elements to add animation to.
 */
const AnimationLayout = ({children}) => {
  const { asPath } = useRouter();
  return (
        <motion.div
          key="modal"
          variants={variants}
          animate="normal"
          initial="enter"
          exit="exit"
        >
          {children}
        </motion.div>
  )
}

/**
 * Use this as a wrapper in _app.js to allow components to animate
 */
const TopLevelAnimationWrapper = ({children}) => {
  return (
      <AnimatePresence
        mode="wait"
      >
        {children}
      </AnimatePresence>
  );
}

export {TopLevelAnimationWrapper, AnimationLayout};