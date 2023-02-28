import { NavLink, Outlet } from 'react-router-dom'
import Header from '@/components/Header'

const About = () => {
  return (
    <>
      <Header>
        <h1>About Page</h1>
      </Header>
      <div className="about">
        <ul className="about_list">
          <li>
            <NavLink to="about-app">About app</NavLink>
          </li>
          <li>
            <NavLink to="about-dev">About developer</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  )
}

export default About
