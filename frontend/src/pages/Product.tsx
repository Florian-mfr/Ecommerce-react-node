import React from 'react'
import { IState as Props } from "../App"

export interface IProps {
    products: Props["product"]
}

const Product: React.FC<Props> = ({ product }) => {
    const url = window.location.href.split('/')
    const id = parseInt(url[4])
    const index = product.findIndex(product => product.id === id)
    const productToDisplay = product[index]

    return (
        <div className='product'>
            <img src={productToDisplay.img} alt="product" className='product__img' />
            <div className='product__info'>
                <h2>{productToDisplay.brand} <span>{productToDisplay.name}</span></h2>
                <p>{productToDisplay.description}</p>
                <p>{productToDisplay.price} €</p>
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Ajouter au panier
                </button>
            </div>
        </div>
    )
}

export default Product;