import NavBar from './components/navbar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import Footer from './components/footer/Footer.js';
import './App.css';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <NavBar />
      <ItemListContainer greeting="Hola mundo"/>
      <Footer/>
    </div>
  );
}

export default App;


