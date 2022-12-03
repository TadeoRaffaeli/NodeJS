import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CustomNavbar from './components/CustomNavbar';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
    <CustomNavbar /> 
    <Routes>
    <Route path='/' element={<ItemListContainer />} />
          <Route path='/cat/:cat' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
