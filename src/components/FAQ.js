// FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
  // Define FAQ data
  const faqData = [
    {
      question: 'How does the collaborative code editor prevent conflicts among developers? ',
      answer: 'By utilizing a robust version control system, conflicts are minimized as developers work simultaneously. Real-time tracking of changes and live code highlighting further help in avoiding overlaps, reducing conflicts.'
    },
    {
      question: 'Can developers communicate efficiently within the collaborative code editor?',
      answer: 'Yes, communication tools integrated directly into the editor facilitate real-time discussions, code sharing, and feedback exchange, streamlining collaboration without the need for switching platforms.'
    },
    {
        question: 'Is the collaborative code editor suitable for teams across different time zones?',
        answer: 'Absolutely. With real-time synchronization and communication features, teams can collaborate seamlessly regardless of geographical locations or time differences, maintaining a consistent development pace.'
      },
  ];

  // State to manage the currently active question
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the visibility of the answer
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h3 className="text-2xl  text-center mb-8">FAQ's</h3>
     <h2 className="text-3xl font-bold text-center mb-8">Frequently asked questions</h2>
      <div>
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 mb-6">
            <button
              className="w-full py-4 text-left focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <span className="flex justify-between items-center">
                <span className="font-semibold">{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div className={`px-4 pt-2 pb-4 ${activeIndex === index ? 'block' : 'hidden'}`}>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
