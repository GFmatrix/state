import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import './home.scss';

const AccordionItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`accordion-item ${expanded ? 'expanded' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-icon">
          {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
        {item.header}
      </div>
      {expanded && <div className="accordion-body">{item.body}</div>}
    </div>
  );
};

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map(item => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Accordion;
