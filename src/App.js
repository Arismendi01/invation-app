import './App.css'
import Navbar from './components/navbar/Navbar'
import {ItemListContainer} from './components/itemListContainer/ItemListContainer'
function App() {
  //const saludo='Hola y bienvenido a la nueva invación'
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='Bienvenidos a Invation'/> 
    </div>
  );
}

export default App;
