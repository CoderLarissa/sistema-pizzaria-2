import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PizzasPage from './pages/pizzasPage.jsx'
import Login from './pages/loginPage.jsx'
import ClientesPage from './pages/clientesPage.jsx'
import PedidosPage from './pages/pedidosPage.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route
        path="/"
        element={<Login/>} 
      />
      <Route 
        path="/clientesPage"
        element={<ClientesPage />}
      />

      <Route
        path="/pizzasPage"
        element={<PizzasPage />}
      />

      <Route 
        path="/pedidosPage"
        element={<PedidosPage/>}
      />

      <Route 
        path='*'
        element={<h1 className='d-flex justify-content-center vh-100 align-items-center'>Página não encontrada</h1>}
      />
    </Routes>
  )
}

export default App
