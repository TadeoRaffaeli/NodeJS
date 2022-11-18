import CustomNavbar from './components/CustomNavbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

const App = () => {
  return (
    <div>
    <CustomNavbar />
    <ItemListContainer mensaje="Hola ItemListContainer"/>
    </div>
  )
}

export default App;
