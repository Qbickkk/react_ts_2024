import {Carts} from "./components/carts/Carts";
import {IProduct} from "./models/Product";
import {Products} from "./components/products/Products";
import {useState} from "react";

const App = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    const getProductsFromCart = (products:IProduct[]) => {
        setProducts(products);
    }

    return (
        <>
            <Carts getProductsFromCart={getProductsFromCart}/>
            <Products items={products}/>
        </>
    );
};

export default App;