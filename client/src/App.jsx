import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Introduction from './pages/Introduction/Introduction'
import Product from './pages/Product/Product'
import Rental from './pages/Rental/Rental'
import Repair from './pages/Repair/Repair'
import Accessary from './pages/Accessary/Accessary'
import Service from './pages/Service/Service'
import News from './pages/News/News'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login' 
import Register from './pages/Register/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gia-bao-forklift' element={<Introduction />} />
        <Route path='/san-pham' element={<Product />} />
        <Route path='/cho-thue-xe-nang' element={<Rental />} />
        <Route path='/sua-chua-xe-nang' element={<Repair />} />
        <Route path='/phu-tung' element={<Accessary />} />
        <Route path='/dich-vu' element={<Service />} />
        <Route path='/tin-tuc' element={<News />} />
        <Route path='/lien-he' element={<Contact />} />
        <Route path='/dang-ky' element={<Register />} />
        <Route path='/dang-nhap' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
