import React, {Fragment, useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(products);
    const fethProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("error", err);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fethProducts();
    },[]);
    console.log(products);
    return (
        <Fragment>
            <div className="ui grid container">
                <ProductComponent />
            </div>
        </Fragment>
    );
}

export default ProductListing
