import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TurkeyProducts from './pages/TurkeyProducts'
import OrderForm from './pages/OrderForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<TurkeyProducts />} />
        <Route path="/order-form" element={<OrderForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
