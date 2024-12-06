import ProductCollectionHeader from "@/modules/HomePage/ProductCollectionHeader.jsx";
import ProductCarousel from "@/modules/HomePage/ProductCarousel.jsx";
import {useEffect, useState} from "react";
import {productApis} from "@/apis/productApis.js";

export default function ProductCollectionCarousel({categoryType}) {

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
        <div className={'container p-3 rounded-xl bg-white'}>
            <ProductCollectionHeader category={categoryType}/>
            <ProductCarousel products={products}/>
        </div>
    );
};