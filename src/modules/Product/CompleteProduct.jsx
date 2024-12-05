import MainProduct from "@/modules/Product/MainProduct.jsx";
import ProductContent from "@/modules/Product/ProductContent.jsx";
import {useLoaderData} from "react-router-dom";

export default function CompleteProduct() {

    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            <MainProduct product={product}/>
            <ProductContent product={product}/>
        </div>
    )
};