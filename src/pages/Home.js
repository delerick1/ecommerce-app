import React, { useEffect } from 'react';
import { getProducts } from '../store/slices/products.slice';
import {useDispatch} from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
dispatch(getProducts());

    },[])


    return (
        <div>
           Home 
        </div>
    );
};

export default Home;