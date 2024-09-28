import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsDescription from '../component/productDetails/ProductDetailsDescription' 
import ProductTabs from '../component/productDetails/ProducDescription';
import allproductData from '../data/common/allproductData';
function ProductDetailDescriptionPage() {
    const { productCategory, productId } = useParams();
         
    const product = allproductData.find((item) => item.id === productId);
  return (
    <div>
      <ProductDetailsDescription product = {product}/> 
      <ProductTabs  product = {product}/>
    </div>
  )
}

export default ProductDetailDescriptionPage
