import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CustomNavbar from './components/CustomNavbar';
import './App.css';
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";


const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <CustomNavbar /> 
    <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cat/:cat' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
