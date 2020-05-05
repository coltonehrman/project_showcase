import React, { useState, useContext, useEffect } from 'react'
import Section from './Section'
import Card from './Card'
import { ModeContext } from '../App'

const TargetAudienceSection = ({ store }) => {
  const { mode } = useContext(ModeContext)
  const [audience, setAudience] = useState([])

  useEffect(() => {
    setAudience(
      store.getTargetAudience().map(ta => ({
        text: ta, editing: false
      }))
    )
  }, [store, mode])

  const [editing, setEditing] = useState(false)

  const addAudience = () => {
    setEditing(true)
    setAudience([ ...audience, { text: '', editing: true }])
  }

  const setAudienceValue = (i) => (e) => {
    audience[i].text = e.target.value
    setAudience([...audience])
  }

  const editAudience = (i) => () => {
    if (mode === 'edit') {
      audience[i].editing = true
      setAudience([...audience])
    }
  }

  const doneEditing = (i) => () => {
    setEditing(false)
    audience[i].editing = false

    if (audience[i].text.trim() === '') {
      audience.splice(i, 1)
    }

    setAudience([...audience])
    store.setTargetAudience(audience.map(ta => ta.text))
  }

  return (
    <Section
      title="Target Audience"
      sectionStyle={{ flex: '1' }}
      bodyStyle={{ paddingLeft: '12.5px' }}
    >
      <Card>
        <ul className="dashboard--list">
          {audience.map((g, i) => (
            <li
              key={i}
              onClick={editAudience(i)}
            >
              {g.editing &&
                <input
                  className="dashboard--list__edit"
                  value={g.text}
                  onChange={setAudienceValue(i)}
                  onBlur={doneEditing(i)}
                  autoFocus
                />
              }
              {!g.editing && g.text}
            </li>
          ))}
        </ul>

        {(mode === 'edit') && !editing &&
          <button
            className="dashboard--list__add"
            onClick={addAudience}
          >
            +
          </button>
        }
      </Card>
    </Section>
  )
}

export default TargetAudienceSection
