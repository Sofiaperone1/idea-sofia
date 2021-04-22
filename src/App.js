
import './App.css';
import {NavBar} from "./components/Navbar/nav-bar";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { CartProvider } from './context/CartContext';

function App() {
  return (
   

   <CartProvider>
    <BrowserRouter>
      <div className="App">
      <NavBar/> 

        <Switch>

            <Route exact path="/">    <ItemListContainer/>  </Route>
            <Route path="/item/:itemId">   <ItemDetailContainer/>     </Route>
            <Route path="/category/:categoryId">    <ItemListContainer/>   </Route>

            <Route path="*">  404  </Route>
          
        </Switch>

        

      </div>
      </BrowserRouter> </CartProvider>
     
  );
}

export default App;


