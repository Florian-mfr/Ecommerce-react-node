import React from 'react'
//import Product from '../components/Product'
import { IState as Props } from "../App"

export interface IProps {
    products: Props["product"]
}

const Home: React.FC<IProps> = ({ products }) => {
    return (
        <>
            <h1>Liste de produits</h1>
            <ul>
                {
                    products.map(product =>
                        <li>
                            <img src={product.img} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <span>{product.price} €</span>
                        </li>)
                }
            </ul>
        </>
    )
}

export default Home;