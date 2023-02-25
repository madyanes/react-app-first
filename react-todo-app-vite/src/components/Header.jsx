const Header = () => {
  return (
    <header>
      <h1 
        style={{
          padding: '20px 0',
          lineHeight: '1.5em',
          color: '#aeadad',
          textAlign: 'center'
        }}>
        Todos
      </h1>
      <p>Items will persist in the browser local storage.</p>
    </header>
  )
}

export default Header
