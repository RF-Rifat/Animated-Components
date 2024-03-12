import { motion } from "framer-motion";
import { useRef } from "react";

const Sidebar = () => {
  const ref = useRef(null);
  return (
    <>
      <motion.button
        className="px-6 py-4 border border-gray-800 rounded-full"
        ref={ref}
        whileHover={{ scale: 1.1 }}
      >
        <span>Hover me</span>
        <motion.span
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          className="bg-blue-400 scale-100 "
        ></motion.span>
      </motion.button>
    </>
  );
};

export default Sidebar;
