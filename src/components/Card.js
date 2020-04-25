import React from 'react'
import '../css/Card.css'

const noop = () => {}

const Card = ({
  style = {},
  onClick = noop,
  children
}) => (
  <div style={style} className="card" onClick={onClick}>
    {children}
  </div>
)

export default Card
