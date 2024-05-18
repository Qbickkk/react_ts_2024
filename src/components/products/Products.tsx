import {FC} from "react";
import {IProduct} from "../../models/Product";
import {Product} from "../product/Product";

interface IProps {
    items: IProduct[]
}

const Products:FC<IProps> = ({items}) => {
    console.log(items)

    return (
        <>
            {
                items.map((id:IProduct)=> <Product key={id.id} id={id}/>)
            }
        </>
    );
};

export {Products};