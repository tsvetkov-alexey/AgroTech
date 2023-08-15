import React from 'react';

const Filter = () => {
  return (
    <select name="seasons">
      <option value="All seasons">Сначала новые</option>
      <option value="1 season">Сначала старые</option>
    </select>
  );
};

export default Filter;
