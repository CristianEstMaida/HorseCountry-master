import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './componentes/NavBar'
import Catalogo from './pages/Catalogo';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/login" element={<Login />} /> {/* 2. Agregar la ruta */}
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </main>

        </BrowserRouter>
      </div>

    </>
  )
}

export default App
