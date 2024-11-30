import {productApis} from "@/apis/productApis.js";
import {useEffect, useState} from "react";
import CardProduct from '@/modules/HomePage/CardProduct.jsx'

export default function Test({categoryType}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const data = await productApis.getProductsByCategory(categoryType);
            setProducts(data);
        };
        fetchProducts();
    }, [categoryType]);

    if (!products.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {products.map(product => {
                return <CardProduct key={product.productId} product={product}/>
            })}
        </div>
    )
};