import styles from '@/styles/Header.module.css'

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  }
  
  return (
    <header>
      <h1 
        style={ headerStyle }
        className={ styles.header }>
        Todos
      </h1>
      <p>Items will persist in the browser local storage.</p>
    </header>
  )
}

export default Header
