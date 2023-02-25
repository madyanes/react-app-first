import { useState } from "react"

const InputTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title.trim()) {
      addTodo(title)
      setTitle('')
    } else {
      alert('New Todo item should not empty!')
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text" 
        placeholder="Add Todo..."
        value={ title }
        onChange={ handleChange } />
      <button>Submit</button>
    </form>
  )
}

export default InputTodo
