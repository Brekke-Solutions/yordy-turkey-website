import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import TurkeyProducts from './pages/TurkeyProducts.jsx'
import OrderForm from './pages/OrderForm.jsx'
import HoursContact from './pages/HoursContact.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/turkey-products" element={<TurkeyProducts />} />
      <Route path="/order-form" element={<OrderForm />} />
      <Route path="/hours-contact" element={<HoursContact />} />
    </Routes>
  )
}
