import React from 'react'
import { NavLink } from 'react-router-dom'
import { IState as Props } from "../App"

export interface IProps {
    products: Props["product"]
}

const Home: React.FC<IProps> = ({ products }) => {
    return (
        <div className='home'>
            <h1 className='home__tittle'>Liste de produits</h1>
            <ul className='home__ul'>
                {
                    products.map(product =>
                        <NavLink exact to={`/product/${product.id}`}>
                            <li>
                                <img src={product.img} alt={product.name} />
                                <h2>{product.brand} <span>{product.name}</span></h2>
                                <p>{product.price} €</p>
                            </li>
                        </NavLink>
                    )
                }
            </ul>
        </div>
    )
}

export default Home;