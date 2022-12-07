import ProductList from '../components/content/prodlist'
import Cart from '../components/content/cart'
import Header from '../components/header'
import { useLocation } from 'react-router-dom'

function Main() {
    const data = useLocation();

    return (
        <>
            <Header />
            <Cart />
            <ProductList />
        </>
    )
}

export default Main;