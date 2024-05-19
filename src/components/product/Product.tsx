import {FC, useEffect, useState} from "react";
import {IFullProduct, IProduct} from "../../models/Product";
import {getProductById} from "../../services/dummy.api.service";

interface IProps {
    id: IProduct
}

const Product:FC<IProps> = ({id:{id}}) => {

    const [product, setProduct] = useState<IFullProduct | null>(null)

    useEffect(() => {
        getProductById(id).then(value => setProduct(value.data))
    }, [id]);

    console.log(product)

    return (
        <>
            {product && <div>{product?.id} {product?.title}</div>}
        </>
    );
};

export {Product};