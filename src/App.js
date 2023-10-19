import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Routes} 
                    from 'react-router-dom';

import Navigation from './components/navigation.component';
import NewShop from './components/shop.component';
import Shophome from './components/shophome.component';
import NewProduct from './components/product.component';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/newshop' Component={NewShop}/>
        <Route path="/newproduct" Component={NewProduct} />
      </Routes>
    </Router>
  );
}

export default App;
