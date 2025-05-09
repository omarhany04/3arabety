import React, { useState } from 'react';
import { Plus, Minus } from 'react-feather';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item pb-4">
      <div 
        className="faq-question flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-bold text-gray-900">{question}</h4>
        {isOpen ? 
          <Minus className="h-5 w-5 text-blue-600" /> : 
          <Plus className="h-5 w-5 text-blue-600" />
        }
      </div>
      <div className={`faq-answer mt-2 ${isOpen ? 'active' : ''}`}>
        <p className="text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;