import React from 'react'
import Section from './Section'
import '../css/DesignIdeas.css'

const DesignIdeas = () => {
  return (
    <div className="design-ideas">
      <Section title="Design Ideas">
        <a href="https://i.ibb.co/hMNSRKW/IMG-1310.jpg" target="_blank" rel="noopener noreferrer">
          <img className="drawing-image" alt="Drawings-1" src="https://i.ibb.co/hMNSRKW/IMG-1310.jpg" />
        </a>

        <a href="https://i.ibb.co/nwtsP3d/IMG-1308.jpg" target="_blank" rel="noopener noreferrer">
          <img className="drawing-image" alt="Drawings-2" src="https://i.ibb.co/nwtsP3d/IMG-1308.jpg" />
        </a>

        <a href="https://i.ibb.co/M1mMxnQ/IMG-1311.jpg" target="_blank" rel="noopener noreferrer">
          <img className="drawing-image" alt="Drawings-3" src="https://i.ibb.co/M1mMxnQ/IMG-1311.jpg" />
        </a>

        <a href="https://i.ibb.co/SrKxCGc/IMG-1309.jpg" target="_blank" rel="noopener noreferrer">
          <img className="drawing-image" alt="Drawings-4" src="https://i.ibb.co/SrKxCGc/IMG-1309.jpg" />
        </a>
      </Section>
    </div>
  )
}

export default DesignIdeas
