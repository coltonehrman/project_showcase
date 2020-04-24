import React, { useState } from 'react'
import Section from './Section'
import Card from './Card'
import './Dashboard.css'

const noop = () => {}

const Title = ({ children }) => (
  <div className="dashboard--header-title">
    <h3 className="dashboard--header-title__h4">{children}</h3>
  </div>
)

const TechTab = ({
  color,
  styles = {},
  first = false,
  last = false,
  editing = false,
  onChange = noop,
  setValue = noop,
  setEditing = noop,
  onClick = false,
  children
}) => {
  let _styles = {
    ...styles
  }

  if (color) {
    _styles.backgroundColor = color
  }

  if (first) {
    _styles.marginLeft = '0'
  }

  if (last) {
    _styles.marginRight = '0'
  }

  const renderBody = () => {
    if (!editing)
      return children
    return (
      <input
        type="text"
        value={children}
        className="dashboard--techtab__edit"
        style={{
          width: `${children.length * 10}px`
        }}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={({ key }) => (key === 'Enter' || key === 'Return') && setValue()}
        onBlur={setValue}
        autoFocus
      />
    )
  }

  return (
    <div
      className="dashboard--techtab"
      style={_styles}
      onClick={onClick || setEditing}
    >
      {renderBody()}
    </div>
  )
}

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
  const [tech, setTech] = useState(JSON.parse(
    localStorage.getItem('technologies') || '[]'
  ))

  const [editing, setEditing] = useState(false)

  const addTech = () => {
    setTech([...tech, { text: '', editing: true }])
    setEditing(true)
  }

  const editTech = (i) => (newTech) => {
    tech[i].text = newTech
    setTech([...tech])
  }

  const setEditingFor = (i) => () => {
    tech[i].editing = true
    setEditing(true)
  }

  const finishEditingTech = (i) => () => {
    if (tech[i].text.trim() === '')
      tech.splice(i, 1)
    else
      tech[i].editing = false

    setTech([...tech])
    setEditing(false)
    localStorage.setItem('technologies', JSON.stringify(tech))
  }

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
      
      <Section title="Technologies Used">
        {tech && tech.map((t, i) => (
          <TechTab
            key={i}
            first={i === 0}
            color="#705CF1"
            editing={t.editing}
            onChange={editTech(i)}
            setEditing={setEditingFor(i)}
            setValue={finishEditingTech(i)}
          >
            {t.text}
          </TechTab>
        ))}

        {!editing && <TechTab
          last
          color="transparent"
          styles={{
            color: '#705CF1',
            paddingLeft: '20px',
            paddingRight: '20px',
            border: '2px solid #705CF1',
            cursor: 'pointer'
          }}
          onClick={() => addTech()}
        >
          +
        </TechTab>}
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
