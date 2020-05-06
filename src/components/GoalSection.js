import React, { useState, useContext, useEffect } from 'react'
import Section from './Section'
import Card from './Card'
import { ModeContext } from '../App'

const GoalSection = ({ store }) => {
  const { mode } = useContext(ModeContext)
  const [goals, setGoals] = useState([])

  useEffect(() => {
    setGoals(
      store.getGoals().map(g => ({
        text: g, editing: false
      }))
    )
  }, [mode])

  const [editing, setEditing] = useState(false)

  const addGoal = () => {
    setEditing(true)
    setGoals([ ...goals, { text: '', editing: true }])
  }

  const setGoalValue = (i) => (e) => {
    goals[i].text = e.target.value
    setGoals([...goals])
  }

  const editGoal = (i) => () => {
    if (mode === 'edit') {
      goals[i].editing = true
      setGoals([...goals])
    }
  }

  const doneEditing = (i) => () => {
    setEditing(false)
    goals[i].editing = false

    if (goals[i].text.trim() === '') {
      goals.splice(i, 1)
    }

    setGoals([...goals])
    store.setGoals(goals.map(g => g.text))
  }

  return (
    <Section
      title="Goal"
      sectionStyle={{ flex: '1' }}
      bodyStyle={{ paddingRight: '12.5px' }}
    >
      <Card>
        <ul className="dashboard--list">
          {goals.map((g, i) => (
            <li
              key={i}
              onClick={editGoal(i)}
            >
              {g.editing &&
                <input
                  className="dashboard--list__edit"
                  value={g.text}
                  onChange={setGoalValue(i)}
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
            onClick={addGoal}
          >
            +
          </button>
        }
      </Card>
    </Section>
  )
}

export default GoalSection
