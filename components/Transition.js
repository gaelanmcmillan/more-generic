import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const transitionTime = 0.25;
const transitionDelay = 0;

const variants = {
  enter: {
    opacity: 0,
    transition: {
      duration: transitionTime
    }
  },

  exit: {
    opacity: 0,
    transition: {
      duration: transitionTime
    }
  },


  normal: {
    opacity: 1,
    transition: {
      duration: transitionTime,
      delay: transitionDelay,
    }
  }
}

const Transition = ({children}) => {
  const { asPath } = useRouter();
  return (
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        <motion.div
          key={asPath}
          variants={variants}
          animate="normal"
          initial="enter"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
  );
}

export default Transition;