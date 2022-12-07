import { Route, Routes } from "react-router-dom";
import Header from './components/header'
import Cart from './components/content/cart'
import Products from './components/content/prodlist'
import styles from './app.module.scss'
import Plate from './components/content/prod themolate/item'
import ProductPlate from './pages/ProductPlate'
import MainPage from './pages/MainPage'
import { useState } from 'react'


function App() {
  const [render, setRender] = useState<boolean>(false)
  return (
    <div className={styles.App}>
      <div>
        <Routes>
          <Route path="/productslist" element={<MainPage />} />
          <Route path="/product" element={<ProductPlate />} />
          <Route path='*' element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
