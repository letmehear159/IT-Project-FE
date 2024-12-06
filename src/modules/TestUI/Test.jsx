import {productApis} from "@/apis/productApis.js";
import {useEffect, useState} from "react";
import CardProduct from '@/modules/HomePage/CardProduct.jsx'
import MainProduct from "@/modules/Product/MainProduct.jsx";
import ProductConfiguration from "@/modules/Product/ProductConfiguration.jsx";
import ProductInformation from "@/modules/Product/ProductInformation.jsx";
import ProductContent from "@/modules/Product/ProductContent.jsx";
import ProductCollectionCarousel from "@/modules/HomePage/ProductCollectionCarousel.jsx";

export default function Test({categoryType}) {


    return (
        // <div>
        //     {products.map(product => {
        //         return <CardProduct key={product.productId} product={product}/>
        //     })}
        // </div>
        <ProductCollectionCarousel categoryType={'Laptop Gaming'}/>
    )
};