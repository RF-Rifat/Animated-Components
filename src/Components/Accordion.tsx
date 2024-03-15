import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Accordion = () => {
  const data = [
    {
      id: 1,
      title: "Section 1",
      content: "This is the content for the first section of the accordion.",
    },
    {
      id: 2,
      title: "Section 2",
      content:
        "This is the content for the second section of the accordion. You can add as many sections as you need.",
    },
    {
      id: 3,
      title: "Section 3",
      content:
        "You can optionally add more sections to your accordion. Just make sure each section has a unique ID, title, and content.",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <AnimatePresence initial={false}>
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ height: 0 }}
          animate={{ height: expandedIndex === index ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4 border rounded-lg overflow-hidden shadow-md"
        >
          <motion.div
            onClick={() => handleToggle(index)}
            className="p-4 cursor-pointer flex items-center justify-between bg-gray-200 hover:bg-gray-300"
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <motion.svg
              variants={{ open: { rotate: 90 }, closed: { rotate: 0 } }}
              animate={expandedIndex === index ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              className="h-6 w-6 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.293l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414-1.414L5.293 7.293z"
                clipRule="evenodd"
              />
            </motion.svg>
          </motion.div>
          {expandedIndex === index && (
            <motion.div
              className="p-4 text-gray-700"
              animate={{ opacity: expandedIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>{item.content}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default Accordion;
