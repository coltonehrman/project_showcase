import React, { useState, useContext, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TechSection from './TechSection'
import DescriptionSection from './DescriptionSection'
import GoalSection from './GoalSection'
import TargetAudienceSection from './TargetAudienceSection'
import ImpactSection from './ImpactSection'
import Section from './Section'
import { ModeContext } from '../App'
import storage from '../controllers/storage'
import '../css/Dashboard.css'
import '../css/ImageSection.css'

const Title = ({ children }) => (
  <div className="dashboard--header-title">
    <h3 className="dashboard--header-title__h4">{children}</h3>
  </div>
)

const SocialLink = ({ url, icon }) => {
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
  const { mode } = useContext(ModeContext)
  const { project } = useParams()
  const fileInput = useRef(null)
  let store = storage.project(project, mode)

  const [images, setImages] = useState([])

  useEffect(() => {
    store = storage.project(project, mode)
    setImages(store.getImages())
  }, [mode])

  if (!store) {
    window.location = '/'
    return null
  }

  const addImages = (toAdd) => {
    const newImages = [...images, ...toAdd]
    store.setImages(newImages)
    setImages(newImages)
  }

  return (
    <div className="dashboard">
      <div className="dashboard--header">
        <Title>
          {project}
        </Title>

        <div className="dashboard--header-links">
          {/* Need to use something like `store.getLinks()` here */}
          {/* <SocialLink url="https://github.com" icon="github" /> */}
        </div>
      </div>
      
      <TechSection store={store} />
      <DescriptionSection store={store} />

      <div style={{ display: 'flex' }}>
        <GoalSection store={store} />
        <TargetAudienceSection store={store} />
        <ImpactSection store={store} />
      </div>

      <Section
        title="Images"
        bodyStyle={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        {mode === 'edit' &&
          <div
            className="dashboard--image__add"
            onClick={() => fileInput.current.click()}
          >
            <span>+</span>
            <input ref={fileInput} onChange={(e) => {
              const processedImages = []
              const totalFiles = e.target.files.length

              for (let i = 0; i < totalFiles; ++i) {
                const reader = new FileReader()
                const file = e.target.files[i]

                reader.onload = (e) => {
                  processedImages.push(e.target.result)

                  if (processedImages.length === totalFiles) {
                    addImages(processedImages)
                  }
                }

                reader.readAsDataURL(file)
              }
            }} style={{ display: 'none' }} type="file" multiple />
          </div>
        }

        {images.map((image, i) => (
          <img className="image" key={i} src={image} />
        ))}
      </Section>
    </div>
  )
}

export default Dashboard
