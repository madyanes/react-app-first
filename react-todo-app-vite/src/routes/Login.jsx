import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/context/AuthContext'
import styles from '@/styles/Login.module.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!username) return;
    login(username)
    setUsername('')
    navigate('/', { replace: true })
  }

  return (
    <div>
      <h1>Login</h1>
      <div className={ styles.formWrapper }>
        <form className={ styles.form } onSubmit={ handleSubmit }>
          <input 
            type="text" 
            placeholder="username" 
            value={ username } 
            onChange={ (e) => setUsername(e.target.value) } />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
