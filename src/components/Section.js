import React from 'react'
import '../css/Section.css'

const Section = ({
  title,
  sectionStyle = {},
  bodyStyle = {},
  children
}) => {
  return (
    <div className="section" style={sectionStyle}>
      <h6
        className="section--title"
      >
          {title}
        </h6>
      <div className="section--body" style={bodyStyle}>
        {children}
      </div>
    </div>
  )
}

export default Section
