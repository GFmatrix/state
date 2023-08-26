import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import './home.scss';

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const toggleAccordion = () => {
    onToggle(item.id);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'expanded' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-icon">
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
        {item.header}
      </div>
      {isOpen && <div className="accordion-body">{item.body}</div>}
    </div>
  );
};

const Accordion = ({ data }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = itemId => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="accordion">
      {data.map(item => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItem === item.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
