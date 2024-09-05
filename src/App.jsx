import { Outlet } from 'react-router-dom'
import './App.css'
import NavItem from './components/NavItem'

function App() {

  return (
    <>
    <NavItem/>
      <Outlet/>
    </>
  )
}

export default App
