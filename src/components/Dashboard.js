import React, { useState } from 'react'
import TechSection from './TechSection'
import Section from './Section'
import Card from './Card'
import './Dashboard.css'

const Title = ({ children }) => (
  <div className="dashboard--header-title">
    <h3 className="dashboard--header-title__h4">{children}</h3>
  </div>
)

const SocialLink = ({
  url,
  icon
}) => {
  let Icon

  if (icon === 'github') {
    Icon = <i className="fa fa-github"></i>
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon}
    </a>
  )
}

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard--header">
        <Title>
          Project Planner / Showcase
        </Title>

        <div className="dashboard--header-links">
          <SocialLink url="https://github.com" icon="github" />
        </div>
      </div>
      
      <TechSection />

      <Section title="Project Description">
        <Card>
          <h4
            className="dashboard--description"
          >
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
          title="Goal"
          sectionStyle={{ flex: '1' }}
          bodyStyle={{ paddingRight: '12.5px' }}
        >
          <Card>
            <ul className="dashboard--list">
              <li>Create an all-in-one platform to plan projects</li>
              <li>Be able to organize and showcase projects</li>
              <li>Have a platform that forces planning beforehand</li>
            </ul>
          </Card>
        </Section>

        <Section
          title="Target Audience"
          sectionStyle={{ flex: '1' }}
          bodyStyle={{ paddingLeft: '12.5px', paddingRight: '12.5px' }}
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

      {/* <Section title="Screenshots">
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
      </Section> */}
    </div>
  )
}

export default Dashboard
