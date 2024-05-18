import {FC, useEffect, useState} from "react";
import {ICart} from "../../models/Cart";
import {getAllCarts} from "../../services/dummy.api.service";
import {Cart} from "../cart/Cart";
import {IProduct} from "../../models/Product";

interface IProps {
    getProductsFromCart:(products:IProduct[])=>void
}

const Carts:FC<IProps> = ({getProductsFromCart}) => {

    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        getAllCarts().then(({data}) => setCarts(data.carts))
    }, []);


    return (
        <>
            {
                carts.map(cart=><Cart key={cart.id} item={cart} getProductsFromCart={getProductsFromCart}/>)
            }
        </>
    );
};

export {Carts};