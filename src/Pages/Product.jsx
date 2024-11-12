import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';


const Product = () => {
  const {all_product}=useContext(ShopContext);
  const{productId} = useParams();
  const product = all_product.find((e)=> e.id=== Number(productId));
  return (
    <div>
      
      <Breadcrum product={product}/>
    <ProductDisplay product={product}/>
    <RelatedProducts/>
    
    
    </div>
  )
}

export default Product
