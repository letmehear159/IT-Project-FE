import {backEndImageSrc, fontEndUrl, imageSrc} from "@/constants/index.ts";
import React, {useEffect, useState} from "react";
import {productApis} from "@/apis/productApis.js";
import stringHelper from "@/utils/stringHelper.js";

export default function SimilarProducts({product}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const data = await productApis.getProductsByCategory(product.category.categoryName);
            setProducts(stringHelper.similarProductByCategory(data, product));
        };
        fetchProducts();
    }, product.category.categoryName);
    if (!products.length) {
        return <div>Loading...</div>;
    }
    return (
        <div className={' pl-4'}>
            <div className={' text-left bg-white p-5'} style={{borderRadius: '4px'}}>
                <div className={'font-bold text-2xl text-gray-700'}>Sản phẩm tương tự</div>
                {
                    products.map((product) =>
                            <a className={' grid flex grid-cols-12 justify-items-end mt-8'} href={`${fontEndUrl}products/${product.productId}`}>
                                <div className={'col-span-4 p-3'}>
                                    <img src={`${backEndImageSrc + product.thumbnail}`} className={''}/>
                                </div>
                                <div className={'col-span-7'}>
                                    <div className={'font-bold text-xl text-gray-700'}> {product.productName}</div>
                                    <div className={'flex-col items-end mt-2 '}>
                                        <div
                                            className=" line-through text-left text-gray-500 text-xl ">{stringHelper.formatPrice(product.price)}</div>

                                        <div className="flex items-center gap-2">
                                            <span
                                                className="text-xl font-bold text-red-600">{stringHelper.formatPrice(product.price)}</span>
                                            <span
                                                className="pro-label-on-sale w-12 h-6 flex items-center justify-center "
                                                style={{borderRadius: '5px'}}>
                    <span>-0%</span>
                    </span>
                                        </div>

                                    </div>

                                </div>

                            </a>
                    )
                }
            </div>
        </div>
    );
};