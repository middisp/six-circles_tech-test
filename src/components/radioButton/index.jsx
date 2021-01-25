import React from 'react';

const RadioButton = ({answer, groupName, onChange, index}) => {
  return (
    <label>
      <input name={groupName} value={index} type="radio" onChange={onChange} />
      {answer}
    </label>
  )
}

export default RadioButton