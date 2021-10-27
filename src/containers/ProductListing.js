import React, {Fragment} from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state);
    console.log(products);
    return (
        <Fragment>
            <div className="ui grid container">
                <ProductComponent />
            </div>
        </Fragment>
    )
}

export default ProductListing
