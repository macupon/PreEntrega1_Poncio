
// ESTILOS
import './App.css';

import CartProvider from './components/context/CartContext';
import Cart from './components/cart/Cart';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import Footer from './components/footer/Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import AboutUs from './components/aboutUs/AboutUs.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';
import CheckoutForm from './components/cart/CheckoutForm';
 
// import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer.js';
import NavBar from './components/navbar/NavBar.js';


function App() {


  return (
    <div className='d-flex flex-column min-vh-100'>
      <CartProvider>
        <BrowserRouter>

          <NavBar />
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/checkout' element={<CheckoutForm/>}/>
              <Route exact path='/cart' element={<Cart/>}/>
              <Route exact path='/nosotros' element={<AboutUs/>}/>
              <Route exact path='/productos' element={<ItemListContainer greeting="productos"/>}/>
              <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>
              <Route exact path='/productos/:categoriaId' element={<ItemListContainer/>}/>
            </Routes>

          <Footer/>

        </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;


