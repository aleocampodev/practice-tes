import React, { useState } from "react";

const InputSearch = ({ children, value, onChange }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default InputSearch;
