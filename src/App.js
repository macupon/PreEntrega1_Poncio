import NavBar from './components/navbar/NavBar.js';
// import Home from './components/home/Home.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import Footer from './components/footer/Footer.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import AboutUs from './components/aboutUs/AboutUs.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';
import Presupuesto from './components/presupuesto/Presupuesto.js';



function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
     
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/nosotros' element={<AboutUs/>}/>
          <Route exact path='/presupuesto' element={<Presupuesto/>}/>
          <Route exact path='/productos' element={<ItemListContainer greeting="productos"/>}/>
          <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>
          <Route exact path='/productos/:categoriaId' element={<ItemListContainer greeting="productos"/>}/>
        </Routes>

        <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;


