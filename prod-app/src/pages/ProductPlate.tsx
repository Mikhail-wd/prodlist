import Product from '../components/content/prod themolate/item'
import Cart from '../components/content/cart'
import Header from '../components/header'
import { useLocation } from 'react-router-dom'

function Plate() {
    const data = useLocation();
    return (
        <>
            <Header />
            <Cart />
            <Product />
        </>
    )
}
export default Plate;