import React, { useState } from 'react'
import Section from './Section'

const noop = () => {}

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

const TechSection = ({ store }) => {
  const [tech, setTech] = useState(
    store.getTech().map(t => ({
      text: t, editing: false
    }))
  )

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
    store.setTech(tech.map(t => t.text))
  }

  return (
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
  )
}

export default TechSection
