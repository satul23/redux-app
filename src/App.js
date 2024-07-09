import './App.css';
import Header from './containers/Header.js';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import ProductListing from "./containers/ProductListing.js"
import ProductDetail from "./containers/Productdetail.js";

function App() {
  return (
    <>
    <div className="App">
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<ProductListing />}/>
        <Route path='/product/:productId'  element={<ProductDetail/>}/>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
