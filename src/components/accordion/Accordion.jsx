import React, { useState } from 'react';
import data from './data.js';
import './accordion.css';

const Accordion = () => {
  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section className='accordion'>
      <h2 className='accordion-heading'>Accordion Component</h2>
      <div className='accordion-list'>
        {data.map((item, i) => (
          <div
            className={`accordion-item ${selected == i ? 'active' : ''}`}
            key={item.id}
            onClick={() => toggle(i)}
          >
            <div className='accordion-item__title'>
              <h2>{item.question}</h2>
              <span className='accordion-item__icon'>
                {selected === i ? '-' : '+'}
              </span>
            </div>
            <div
              className={`accordion-item__content ${
                selected === i ? 'show' : ''
              }`}
            >
              <div className='accordion-item__content-inner'>{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
