import React, { useState, useContext, useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import Section from './Section'
import Card from './Card'
import { ModeContext } from '../App'

const DescriptionSection = ({ store }) => {
  const { mode } = useContext(ModeContext)
  const [description, setDescription] = useState('')

  useEffect(() => {
    setDescription(store.getDescription())
  }, [mode])
  
  const [editing, setEditing] = useState(false)

  const doneEditing = () => {
    setEditing(false)
    store.setDescription(description)
  }

  return (
    <Section title="Project Description">
      <Card onClick={() => setEditing(mode === 'edit')}>
        <h4
          className="dashboard--description"
        >
          {editing &&
            <TextareaAutosize
              value={description}
              className="dashboard--description__edit"
              onChange={(e) => setDescription(e.target.value)}
              onBlur={doneEditing}
              autoFocus
            />
          }
          {!editing && description.split('\n\n').map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </h4>
      </Card>
    </Section>
  )
}

export default DescriptionSection
