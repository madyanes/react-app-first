import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import InputTodo from "@/components/InputTodo"
import TodosList from "@/components/TodosList"

const TodosLogic = () => {
  const getInitialTodos = () => {
    // getting stored todos
    const temp = localStorage.getItem('todos')
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  const [todos, setTodos] = useState(getInitialTodos())

  useEffect(() => {
    // storing todos
    const temp = JSON.stringify(todos)
    localStorage.setItem('todos', temp)
  }, [todos])

  const setUpdate = (updatedTitle, id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.title = updatedTitle
      }
      return todo
    }))
  }

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <InputTodo addTodo={ addTodo } />
      <TodosList todosProps={ todos } 
        handleChange={ handleChange } 
        deleteTodo={ deleteTodo } 
        setUpdate={ setUpdate } 
      />
    </div>
  )
}

export default TodosLogic
