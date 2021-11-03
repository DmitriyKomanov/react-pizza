import React, { useState } from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className='categories'>
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              key={name}
              className={activeItem === index ? 'active' : ''}
              onClick={() => {
                onSelectItem(index);
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
