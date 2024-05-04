import React, {FC} from "react";

export interface IProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

type IProductTypeProps = IProductProps & {children?: React.ReactNode}

const Product: FC<IProductTypeProps> = ({title, description,price, images,id, brand, category, discountPercentage, stock, thumbnail, rating}) => {
    return (
        <>
            <h3>{category} - {title} - {brand}</h3>
            <p>{description}</p>
            <h5>{price}$ - discount     {discountPercentage}%</h5>
            <>
                {images.map(image=><img key={id} src={image} alt={title} width={500} height={400}/>)}
            </>
            <p>
                Rating - {rating}
                Stock - {stock}
            </p>
            <img src={thumbnail} alt={title}/>
            <hr/>
        </>
    );
};

export {Product};