import {FC, useEffect, useState} from "react";
import {IFullProduct, IProduct} from "../../models/Product";

interface IProps {
    id: IProduct
}

const Product:FC<IProps> = ({id:{id}}) => {

    const [product, setProduct] = useState<IFullProduct>(null)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(value=>value.json())
        .then(({data})=>{
            setProduct(data)
        })
    }, [id]);

    console.log(product)

    return (
        <>
            {product && <div>{product?.id} {product?.title}</div>}
        </>
    );
};

export {Product};