import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/slices/products.slice';

const Home = () => {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts())
    }, []);

   

    return (
<ul className="products-list">         
   {
              products.map((productsItem ) => (
                <li key={productsItem.id}>
                <h2>{productsItem.title}</h2>
    <img src={productsItem.productImgs} alt="" />
  
          <button >Details :D</button>

</li>
              
              
              ))}
              </ul>
    );
};

export default Home;