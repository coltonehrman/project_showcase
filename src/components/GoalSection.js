import React, { useState } from 'react'
import Section from './Section'
import Card from './Card'

const GoalSection = () => {
  const STORAGE_KEY = 'goals'

  const [goals, setGoals] = useState(JSON.parse(
    localStorage.getItem(STORAGE_KEY) || '[]'
  ))

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
    goals[i].editing = true
    setGoals([...goals])
  }

  const doneEditing = (i) => () => {
    setEditing(false)
    goals[i].editing = false

    if (goals[i].text.trim() === '') {
      goals.splice(i, 1)
    }

    setGoals([...goals])
    localStorage.setItem(STORAGE_KEY, JSON.stringify(goals))
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

        {!editing &&
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
