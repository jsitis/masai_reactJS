import React from "react";

function Select({ options, value, onChange }) {
  return (
    <>
      <select value={value} onChange={onChange}>
        <option value="">Select Role</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <br/><br/>
    </>
  );
}

export default Select;
