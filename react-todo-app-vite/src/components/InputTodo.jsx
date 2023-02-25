import { useState } from "react"

const InputTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title.trim()) {
      addTodo(title)
      setTitle('')
      setMessage('')
    } else {
      setMessage('New Todo item should not empty!')
    }
  }

  return (
    <>
      <form onSubmit={ handleSubmit } className="form-container">
        <input 
          type="text" 
          placeholder="Add Todo..."
          value={ title }
          onChange={ handleChange }
          className="input-text" />
        <button className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{ message }</span>
    </>
  )
}

export default InputTodo
