import React from 'react'
import TechSection from './TechSection'
import DescriptionSection from './DescriptionSection'
import GoalSection from './GoalSection'
import TargetAudienceSection from './TargetAudienceSection'
import ImpactSection from './ImpactSection'
import storage from '../controllers/storage'
import '../css/Dashboard.css'

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

const Dashboard = ({
  project
}) => {
  console.log(project)
  const store = storage.project(project)

  return (
    <div className="dashboard">
      <div className="dashboard--header">
        <Title>
          {/* Need to use something like `store.getTitle()` here */}
          Project Planner / Showcase
        </Title>

        <div className="dashboard--header-links">
          {/* Need to use something like `store.getLinks()` here */}
          <SocialLink url="https://github.com" icon="github" />
        </div>
      </div>
      
      <TechSection store={store} />
      <DescriptionSection store={store} />

      <div style={{ display: 'flex' }}>
        <GoalSection />
        <TargetAudienceSection />
        <ImpactSection />
      </div>

      {/* <Section title="Drawings">
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
      </Section> */}
    </div>
  )
}

export default Dashboard
