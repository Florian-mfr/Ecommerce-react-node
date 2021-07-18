import React, { useEffect } from 'react'
import { ProductType } from "../pages/Home"

// state
import { detailProducts } from "../state/action-creators/index"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/reducers';

interface State {
    loading: boolean
    product: ProductType['product']
}

const Product: React.FC = () => {
    const url = window.location.href.split('/')
    const productId = parseInt(url[4])

    const productDetail: State = useSelector((state: RootState) => state.productDetail)
    const { loading, product } = productDetail;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailProducts(productId));
        return () => {
            //
        };
    }, [dispatch, productId]);
    console.log(productDetail)

    return (
        <div className='product'>
            {!loading && (
                <>
                    <img src={product.img} alt="product" className='product__img' />
                    <div className='product__info'>
                        <h2>{product.brand} <span>{product.name}</span></h2>
                        <p>{product.description}</p>
                        <p>{product.price} €</p>
                        <button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Ajouter au panier
                        </button>
                    </div>
                </>

            )}

        </div>
    )
}

export default Product;