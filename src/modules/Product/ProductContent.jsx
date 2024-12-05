import ProductInformation from "@/modules/Product/ProductInformation.jsx";
import ProductConfiguration from "@/modules/Product/ProductConfiguration.jsx";
import SimilarProducts from "@/modules/Product/SimilarProducts.jsx";

export default function ProductContent({product}) {
    return (
        <div className={'grid grid-cols-12 mt-5 justify-between '}>
            <div className={'col-span-7'}>
                <ProductInformation product={product}/>
            </div>
            <div className={'col-span-5'}>
                <ProductConfiguration product={product}/>
                <div className={'m-5'}></div>
                <SimilarProducts product={product} />
            </div>
        </div>
    );
};