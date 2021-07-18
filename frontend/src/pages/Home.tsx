import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
//state
import { listProducts } from "../state/action-creators/index"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/reducers';

export interface ProductType {
  product: {
    id: number,
    brand: string,
    name: string,
    img: string,
    price: number,
    description: string,
  }
}

const Home: React.FC = () => {
  
  interface State {
    loading: boolean
    products: Array<ProductType['product']>
  }

  const productList: State = useSelector((state: RootState) => state.productsList)
  const { loading, products} = productList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);
  return (
    <div className='home'>
      <h1 className='home__tittle'>Liste de produits</h1>
      <ul className='home__ul'>
        {!loading &&
          products.map((product: ProductType['product'] ) =>
            <NavLink exact to={`/product/${product.id}`} key={product.id}>
              <li >
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