import React from 'react'

const Checkbox = ({data}) => {
  const {title, value} = data;
  return (
    <li>
      <label className="check-container">
        <input type="checkbox"/>
        <span className="checkmark"></span>
        {
          value ? <small><span>{title}</span><span>{value}</span></small> : <small>{title}</small>
        }
      </label>
    </li>
  )
}

export default Checkbox;