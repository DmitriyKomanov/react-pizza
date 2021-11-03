import React, { useState } from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className='categories'>
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              key={name}
              className={activeItem === index ? 'active' : ''}
              onClick={() => {
                setActiveItem(index);
              }}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
