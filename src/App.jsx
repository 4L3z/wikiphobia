import { Homepage } from './components/Homepage'
import { SideBar } from './components/Sidebar'
import { Maps } from './components/Maps/Maps'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Ghosts from './components/Ghost/Ghosts'
// import { NotFound } from './components/404/NotFound';


function App() {
  return (
    <>
      <SideBar />
      <Homepage />
      <Maps />
      <Ghosts />
    </>
  )
}

export default App;
