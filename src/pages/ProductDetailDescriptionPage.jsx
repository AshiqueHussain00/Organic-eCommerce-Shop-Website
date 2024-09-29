import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsDescription from '../component/productDetails/ProductDetailsDescription' 
import ProductTab from '../component/productDetails/ProductTab';
import RelativeProducts from '../component/productDetails/RelativeProduct';
import allproductData from '../data/common/allproductData';
import NewsletterThree from '../component/common/NewsletterThree'
import Footer1 from '../component/common/footer/footer1'

function ProductDetailDescriptionPage() {
    const { productCategory, productId } = useParams();
         
    const product = allproductData.find((item) => item.id === productId);
  return (
    <div>
      <ProductDetailsDescription product = {product}/> 
      <ProductTab  product = {product}/>
      <RelativeProducts/>
      <NewsletterThree/>
      <Footer1/>
    </div>
  )
}

export default ProductDetailDescriptionPage
