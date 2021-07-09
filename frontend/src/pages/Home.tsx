import React from 'react'

const Home: React.FC = (products) => {
return (
    <>
    <h1>Liste de produits</h1>
    <ul>
        {
            products.map((product: any) => 
            <li>
                <h1>{product.name}</h1>
            </li>)
        }
    </ul>
    </>
)
}

export default Home;