import { motion } from "framer-motion";
function Box4() {
  const boxVariant = {
    visible: {
      scale: [1, 1.4, 1.4, 1, 1],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      rotate: [0, 0, 270, 0],
      transition: {
        duration: 10,
        delay: 1,
      },
    },
  };
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="visible"></motion.div>
    </div>
  );
}

export default Box4;
