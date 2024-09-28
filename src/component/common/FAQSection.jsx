import React, { useState } from 'react';
import manwithfruits from '../../assets/common/faq/manwithfruits.svg';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const faqs = [
  { question: 'What is an Ecobazar?', answer: 'An Ecobazar is a marketplace that focuses on selling eco-friendly and sustainable products.' },
  { question: 'How can I contribute?', answer: 'You can contribute by purchasing products, volunteering, or spreading the word about our initiatives.' },
  { question: 'Are all products organic?', answer: 'While a majority of the products are organic, we also offer products that are eco-friendly in other ways.' },
  { question: 'What are the opening hours?', answer: 'Our Ecobazar is open from 8 AM to 8 PM every day.' }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className='w-10/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between'>
        <div className="max-w-4xl mx-auto p-10 bg-white flex-grow">
          <h2 className="text-4xl text-black-900 font-bold text-center mb-5">Welcome, Let's Talk About Our Ecobazar</h2>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`mb-2 rounded transition-all duration-500 ${openIndex === index ? 'border-green-500 border transition-all duration-500' : 'border-primary'} ${openIndex === index ? '' : 'bg-gray-100'}`}
            >
              <button 
                onClick={() => toggleFAQ(index)} 
                className={`flex justify-between items-center w-full text-left py-4 ${openIndex === index ? 'border-b border-green-500' : ''}`}
              >
                <span className={`font-poppins ml-4 ${openIndex === index ? 'text-hard_primary text-[1.1rem]' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className="text-lg rounded-full flex bg-white-100 mr-4">
                  {openIndex === index ? <CiCircleMinus size={25} /> : <CiCirclePlus size={25} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-base text-gray-400 p-3 border-t border-green-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex-shrink-0 w-96 md:ml-5 mt-5 md:mt-0"> {/* Adjust margins for small screens */}
          <img loading='lazy' src={manwithfruits} alt="man-with-fruits" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
