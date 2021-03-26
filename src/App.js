
import './App.css';
import {NavBar} from "./components/Navbar/nav-bar";
import ItemListContainer from "./components/ItemListContainer/index"


function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListContainer/>
    </div>
  );
}

export default App;
