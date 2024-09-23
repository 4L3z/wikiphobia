import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import Nivel1 from './components/Objects/Nivel1';
import Nivel2 from './components/Objects/Nivel2';
import Nivel3 from './components/Objects/Nivel3';
import { Maps } from './components/Maps/Maps';
import Ghosts from './components/Ghost/Ghosts';
import Objects from './components/Objects/Objects';
import { NotFound } from './components/404/NotFound';
import ObjetosMalditos from './components/Cursed_Objects/objetosMalditos';
import Navbar from './components/Navbar/Navbar';
// import Tienda from './components/Tienda/Tienda';
import Consejos from './components/Consejos/Tips';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <section id="homepage">
                <Homepage />
              </section>
              <section id="maps">
                <Maps />
              </section>
              <section id="ghosts">
                <Ghosts />
              </section>
              <section id="objects">
                <Objects />
              </section>
              <section id='c-objects'>
                <ObjetosMalditos/>
              </section>
              <section id="tips">
              <Consejos/>
              </section>
              {/* <Tienda/> */}
            </>
          }
        />
        <Route path="/nivel1" element={<Nivel1 />} />
        <Route path="/nivel2" element={<Nivel2 />} />
        <Route path="/nivel3" element={<Nivel3 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
