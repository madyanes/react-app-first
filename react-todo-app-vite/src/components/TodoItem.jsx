import { useState, useRef } from 'react'
import styles from '@/styles/TodoItem.module.scss'

const TodoItem = ({ itemProp, handleChange, deleteTodo, setUpdate }) => {
  const editInputRef = useRef(null)
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id)
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  }

  let editMode = {}
  let viewMode = {}
  if (editing) {
    viewMode.display = 'none'
  } else {
    editMode.display = 'none'
  }

  return (
    <li className={ styles.item }>
      <div className={ styles.content } style={ viewMode }>
        <input 
          type="checkbox"
          checked={ itemProp.completed }
          onChange={ () => handleChange(itemProp.id) } />
        <button onClick={ handleEditing }>Edit</button>
        <button onClick={ () => deleteTodo(itemProp.id) }>Delete</button>
        <span style={ itemProp.completed ? completedStyle : null }>
          { itemProp.title }
        </span>
      </div>
      <input 
        type="text"
        ref={ editInputRef }
        defaultValue={ itemProp.title }
        style={ editMode }
        onKeyDown={ handleUpdatedDone }
        className={ styles.textInput } />
    </li>
  )
}

export default TodoItem
