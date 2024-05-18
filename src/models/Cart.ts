import {IProduct} from "./Product" ;

export interface ICarts {
    carts: ICart[];
}


export interface ICart {
    id: number,
    products: IProduct[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}