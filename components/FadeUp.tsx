import { Children } from "react";

import { m } from "framer-motion";

// Component imports
import { InView } from "react-intersection-observer";

const Sweep = {
  type: "tween",
  duration: 1.5,
  ease: [0.16, 1, 0.3, 1],
};
interface Props {
  children: any;
  /**
   * This would be the number of seconds before the animation for each child starts.
   */
  delay?: number;
  fullWidth?: boolean;
}

export const FadeUp = ({ children, delay = 0.25, fullWidth = true }: Props) => {
  return Children.map(children, (child, i) => (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <m.div
          transition={{ ...Sweep, delay: delay * i }}
          variants={{ hide: { opacity: 0, y: 64 }, show: { opacity: 1, y: 0 } }}
          ref={ref}
          initial="hide"
          className={fullWidth ? "w-full" : ""}
          animate={inView && "show"}
        >
          {child}
        </m.div>
      )}
    </InView>
  ));
};
