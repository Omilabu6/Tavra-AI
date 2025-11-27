import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is StampNet?",
    answer:
      "StampNet is a decentralized timestamping platform that allows users to prove document existence at a specific time using blockchain technology.",
  },
  {
    question: "How does blockchain-based timestamping work?",
    answer:
      "When you upload a document, StampNet generates a cryptographic hash and stores it on the blockchain, ensuring an immutable record of its existence.",
  },
  {
    question: "Is my document stored on the blockchain?",
    answer:
      "No, only the hash of your document is stored on the blockchain, ensuring privacy while proving authenticity.",
  },
  {
    question: "Can I verify a previously timestamped document?",
    answer:
      "Yes, you can upload your document to StampNet, and it will check the hash against the blockchain records.",
  },
  {
    question: "Is StampNet free to use?",
    answer:
      "StampNet may have gas fees associated with blockchain transactions, but basic verification features could be free.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1000px] mx-auto my-10 px-5">
      <h2 className="text-6xl font-bold mb-5">FAQ</h2>

      <div className="border-t border-black">
        {faqData.map((faq, index) => (
          <motion.div
            layout
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="border-b border-black py-2"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-lg font-medium text-left cursor-pointer flex justify-between items-center py-2"
            >
              {faq.question}

              {/* Animated Icon */}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[22px] inline-block"
              >
                {openIndex === index ? "−" : "+"}
              </motion.span>
            </button>

            {/* Smooth Slide Answer */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ y: -6 }}
                    animate={{ y: 0 }}
                    exit={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="pt-2 pb-3 text-base text-white"
                  >
                    {faq.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
