import React from 'react'
import Card from './Card'
import './Dashboard.css'

const Title = ({ children }) => (
  <div className="dashboard--title">
    <h3 className="dashboard--title__h4">{children}</h3>
  </div>
)

const Section = ({
  title,
  sectionStyle = {},
  bodyStyle = {},
  children
}) => {
  return (
    <div className="dashboard--section" style={sectionStyle}>
      <h6
        className="dashboard--section-title"
      >
          {title}
        </h6>
      <div className="dashboard--section-body" style={bodyStyle}>
        {children}
      </div>
    </div>
  )
}

const TechTab = ({
  description,
  color,
  first = false,
  last = false,
  children
}) => {
  let style = {
    backgroundColor: color
  }

  if (first) {
    style.marginLeft = '0'
  }

  if (last) {
    style.marginRight = '0'
  }

  return (
    <div
      className="dashboard--techtab"
      style={style}
    >
      {children}
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Title>Project Planner / Showcase</Title>
      
      <Section title="Technologies Used">
        <TechTab color="#705CF1" first>React</TechTab>
        <TechTab color="#705CF1">JS</TechTab>
        <TechTab color="#705CF1">SASS</TechTab>
        <TechTab color="#705CF1">HTML5</TechTab>
        <TechTab color="#705CF1" last>CSS3</TechTab>
      </Section>

      <Section title="Project Description">
        <Card>
          <h4 className="dashboard--description">
            <p>
              A project planner for beginnners to help them plan out projects step by step.
              Helps junior developers start projects from sratch, with all things in mind before they even start coding.
              Focuses on project planning, setup, testing, and design.
            </p>
            <p>
              A project showcase for beginners to show off their work / projects to recruiters and friends.
              Helps the developer to really pick out and show the "sparkles" in each and every project.
            </p>
          </h4>
        </Card>
      </Section>

      <div style={{ display: 'flex' }}>
        <Section
          title="Target Audience"
          sectionStyle={{ flex: '1' }}
          bodyStyle={{ paddingRight: '12.5px' }}
        >
          <Card>
            <ul className="dashboard--list">
              <li>Job Seekers</li>
              <li>Students</li>
              <li>Junior Developers</li>
              <li>Project Managers</li>
            </ul>
          </Card>
        </Section>

        <Section
          title="Impact"
          sectionStyle={{ flex: '1' }}
          bodyStyle={{ paddingLeft: '12.5px' }}
        >
          <Card>
            <ul className="dashboard--list">
              <li>Help out struggling young developers</li>
              <li>Create a planner mindset</li>
              <li>Relieve having to worry about the details</li>
              <li>Reduce stress when starting a new project</li>
            </ul>
          </Card>
        </Section>
      </div>

      <Section title="Drawings">
        <a href="https://i.ibb.co/hMNSRKW/IMG-1310.jpg" target="_blank" rel="noopener noreferrer">
          <img className="drawing-image" src="https://i.ibb.co/hMNSRKW/IMG-1310.jpg" />
        </a>

        <a href="https://i.ibb.co/nwtsP3d/IMG-1308.jpg" target="_blank" rel="noopener noreferrer">
          <img className="drawing-image" src="https://i.ibb.co/nwtsP3d/IMG-1308.jpg" />
        </a>

        <a href="https://i.ibb.co/M1mMxnQ/IMG-1311.jpg" target="_blank" rel="noopener noreferrer">
          <img className="drawing-image" src="https://i.ibb.co/M1mMxnQ/IMG-1311.jpg" />
        </a>

        <a href="https://i.ibb.co/SrKxCGc/IMG-1309.jpg" target="_blank" rel="noopener noreferrer">
          <img className="drawing-image" src="https://i.ibb.co/SrKxCGc/IMG-1309.jpg" />
        </a>
      </Section>
    </div>
  )
}

export default Dashboard
