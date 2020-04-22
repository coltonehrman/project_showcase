import React from 'react'
import './Card.css'

const Card = ({
  style = {},
  children
}) => (
  <div style={style} className="card">
    {children}
  </div>
)

export default Card
