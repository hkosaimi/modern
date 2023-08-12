import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Box6() {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["start end", "end end"],
  });

  return (
    <>
      <motion.div className="box" ref={ref} style={{}}></motion.div>
      <motion.div
        className="supremacy"
        ref={ref2}
        style={{
          scaleX: scrollYProgress,
        }}></motion.div>
    </>
  );
}

export default Box6;
