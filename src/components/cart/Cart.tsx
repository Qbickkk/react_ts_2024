import {FC} from "react";
import {ICart} from "../../models/Cart";
import {IProduct} from "../../models/Product";

type IProps = {item: ICart, getProductsFromCart:(products: IProduct[]) => void}

const Cart:FC<IProps> = ({item, getProductsFromCart}) => {


    const onClickHandlerCallback = () => {
        getProductsFromCart(item.products)
    };

    return (
        <div>
            cart# - {item.id}. Total - {item.total}
            <button onClick={onClickHandlerCallback}>details</button>
        </div>
    );
};

export {Cart};