import React, { useState, useContext, useEffect } from 'react'
import Section from './Section'
import Card from './Card'
import { ModeContext } from '../App'

const ImpactSection = ({ store }) => {
  const { mode } = useContext(ModeContext)

  const [impacts, setImpacts] = useState([])

  useEffect(() => {
    setImpacts(
      store.getImpacts().map(i => ({
        text: i, editing: false
      }))
    )
  }, [mode])

  const [editing, setEditing] = useState(false)

  const addImpact = () => {
    setEditing(true)
    setImpacts([ ...impacts, { text: '', editing: true }])
  }

  const setImpactValue = (i) => (e) => {
    impacts[i].text = e.target.value
    setImpacts([...impacts])
  }

  const editImpact = (i) => () => {
    if (mode === 'edit') {
      impacts[i].editing = true
      setImpacts([...impacts])
    }
  }

  const doneEditing = (i) => () => {
    setEditing(false)
    impacts[i].editing = false

    if (impacts[i].text.trim() === '') {
      impacts.splice(i, 1)
    }

    setImpacts([...impacts])
    store.setImpacts(impacts.map(i => i.text))
  }

  return (
    <Section
      title="Impact"
      sectionStyle={{ flex: '1' }}
      bodyStyle={{ paddingLeft: '12.5px' }}
    >
      <Card>
        <ul className="dashboard--list">
          {impacts.map((g, i) => (
            <li
              key={i}
              onClick={editImpact(i)}
            >
              {g.editing &&
                <input
                  className="dashboard--list__edit"
                  value={g.text}
                  onChange={setImpactValue(i)}
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
            onClick={addImpact}
          >
            +
          </button>
        }
      </Card>
    </Section>
  )
}

export default ImpactSection
