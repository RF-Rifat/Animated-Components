import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
function App() {
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
                initial={{
                  scale: 1,
                  y: 0,
                }}
                animate={{
                  scale: 0,
                  y: 10,
                }}
                exit={{
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="shadow-lg left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2"
              >
                <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                  <p>Light</p>
                </span>
                <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                  <p>Dark</p>
                </span>
                <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                  <p>System</p>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}

export default App;
