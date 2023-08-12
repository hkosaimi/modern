import { motion } from "framer-motion";
function Box2() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        drag
        dragConstraints={{
          right: 200,
          left: 0,
          top: 0,
          bottom: 200,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
          rotate: 360,
        }}
        transition={{
          duration: 2,
        }}></motion.div>
    </div>
  );
}

export default Box2;
