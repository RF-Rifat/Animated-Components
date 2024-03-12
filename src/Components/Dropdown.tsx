import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Dropdown = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <main className="w-screen h-screen bg-zinc-100 p-2 text-zinc-700 items-center justify-center grid">
        <div>
          <button
            onClick={() => {
              setClick(!click);
            }}
            className="group transition-all duration-200 p-2 flex flex-row items-center justify-center bg-white gap-2 rounded-lg border border-zinc-200"
          >
            <span>Dropdown</span>
          </button>
          <AnimatePresence>
            {click && (
              <motion.div
                initial={{ rotate: "0deg" }}
                animate={{ rotate: "180deg" }}
                exit={{ rotate: "180deg" }}
                transition={{ duration: 0.6, ease: "backInOut" }}
                className="shadow-lg left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2"
              >
                <span className="flex flex-row gap-2 items-center p-2 rounded-lg">
                  <motion.p>Light</motion.p>
                </span>
                <span className="flex flex-row gap-2 items-center p-2 rounded-lg">
                  <p>Dark</p>
                </span>
                <span className="flex flex-row gap-2 items-center p-2 rounded-lg">
                  <p>System</p>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
};

export default Dropdown;
