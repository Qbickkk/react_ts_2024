import {FC, useEffect, useState} from "react";
import {IProductProps, Product} from "./Product/Product";

const Products:FC = () => {

    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(value=>value.json())
        .then(value=>setProducts(value.products))
    }, []);

    return (
        <div>
            {products.map(product=><Product id={product.id} title={product.title} description={product.description} price={product.price} discountPercentage={product.discountPercentage} rating={product.rating} stock={product.stock} brand={product.brand} category={product.category} thumbnail={product.thumbnail} images={product.images}/>)}
        </div>
    );
};

export {Products};