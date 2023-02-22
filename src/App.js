import './App.css';
import { Register } from './components/signup/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/homepage/homepage';
import { Login } from './components/login/login';
import { SellerCategory } from './components/seller/category/category';
import { SellerProfile } from './components/seller/profile/profile';
import { SellerBooking } from './components/seller/booking/booking';
import { SellerProductDesc } from './components/seller/product_desc/product_desc';
import { BuyerHomepage } from './components/buyer/homepage/homepage';
import { DealerHomepage } from './components/dealer/homepage/homepage';

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/category' element={<SellerCategory />} />
          <Route path='/profile' element={<SellerProfile />} />
          <Route path='/booking' element={<SellerBooking />} />
          <Route path='/product-desc' element={<SellerProductDesc />} />
          <Route path='/buyer' element={<BuyerHomepage />} />
          <Route path='/dealer' element={<DealerHomepage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
