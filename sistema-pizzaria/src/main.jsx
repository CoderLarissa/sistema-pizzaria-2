import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ClientesPage from './pages/clientesPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import Pedidos from './pages/pedidos.jsx';

import Pizzas from './pages/pizzas.jsx';
import PedidoTable from './components/pedidoTable.jsx';
import ClienteModal from './components/ClienteModal.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pizzas />
  </StrictMode>,
)
