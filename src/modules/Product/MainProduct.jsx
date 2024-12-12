import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel.jsx"
import '/src/modules/module_css/product.css'
import ProductCard from "@/modules/HomePage/CardProduct.jsx";
import {backEndImageSrc, imageSrc} from "@/constants/index.ts";
import React, {useState} from "react";
import stringHelper from "@/utils/stringHelper.js";
import {orderDetailApis} from "@/apis/orderDetailApis.js";

export default function MainProduct({product}) {

    const userCartId = localStorage.getItem('cartId');

    const addToCart = () => {
        if (orderDetailApis.createOrderDetail(userCartId, product.productId, product.price)) {
            console.log("add success");
        }
    }

    return (
        <div className={'bg-white grid grid-cols-12 flex '}>
            <div className={'col-span-5 border-r-2'}>
                <div className={'p-4 mt-14 '}>
                    <div>
                        <Carousel>
                            <CarouselContent>
                                {
                                    product.productImages.map((productImage) => (
                                        <CarouselItem
                                            key={productImage.productImageId}
                                        >
                                            <img src={`${backEndImageSrc + productImage.imageUrl}`}
                                                 className={'cursor-pointer rounded-xl'}/>
                                        </CarouselItem>
                                    ))
                                }

                            </CarouselContent>
                            <CarouselPrevious className={'left-1'}/>
                            <CarouselNext className={'right-1 '}/>
                        </Carousel>
                    </div>
                    <div className={'mt-5'}>
                        <Carousel>
                            <CarouselContent>
                                {
                                    product.productImages.map((productImage) => (
                                        <CarouselItem className="md:basis-1/4 lg:basis-1/5"
                                                      key={productImage.productImageId}
                                        >
                                            <img src={`${backEndImageSrc + productImage.imageUrl}`}
                                                 className={'cursor-pointer '}
                                            />
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                            <CarouselPrevious className={'left-1'}/>
                            <CarouselNext className={'right-1 '}/>
                        </Carousel>
                    </div>
                    <div className={'mt-5'}><img src={`${imageSrc}gfestsale.webp`} style={{borderRadius: '5px'}}/></div>
                </div>
            </div>

            <div className={'col-span-7  p-5'}>
                <div className={'text-start font-bold text-2xl'}>{product.productName}</div>
                <div className={'flex mt-4'}>
                    <span className={'text-start font-bold text-amber-500 mr-1 '} style={{fontSize: '20px'}}> 0.0</span>
                    <svg viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={'w-4'}>
                        <path
                            d="M2.09627 11.6195L2.82735 8.16864L0.268563 5.80414C0.268563 5.80414 -0.096986 5.48462 0.0248693 5.03728C0.146725 4.58994 0.634105 4.58994 0.634105 4.58994L4.04582 4.27041L5.38614 1.01124C5.38614 1.01124 5.5689 0.5 5.99538 0.5C6.42185 0.5 6.60461 1.01124 6.60461 1.01124L7.94493 4.27041L11.4785 4.58994C11.4785 4.58994 11.844 4.65385 11.9659 5.03728C12.0877 5.42071 11.844 5.67633 11.844 5.67633L9.1634 8.16864L9.89448 11.7473C9.89448 11.7473 10.0163 12.1308 9.71171 12.3864C9.40709 12.642 8.91971 12.3864 8.91971 12.3864L5.99538 10.5331L3.13197 12.3864C3.13197 12.3864 2.70551 12.642 2.33996 12.3864C1.97442 12.1308 2.09627 11.6195 2.09627 11.6195Z"
                            fill="#FF8A00"></path>
                    </svg>
                    <a href={''} className={'ml-5 text-2xl hover:text-red-600'}>Xem đánh giá</a>
                </div>
                <div className={'flex items-end mt-4 '}>

                    <div className="flex items-center gap-2">
                        <span
                            className="text-3xl font-bold text-red-600">{stringHelper.formatPrice(product.price)}</span>
                    </div>
                    <div
                        className=" line-through text-left text-gray-500 text-xl ml-3">{stringHelper.formatPrice(product.price)}</div>
                    <span
                        className="pro-label-on-sale w-12 h-8 flex items-center justify-center "
                        style={{borderRadius: '5px'}}>
                    <span>-0%</span>
                    </span>
                </div>
                <div className={'flex '}>
                    <button className={' flex-col bg-red-600 text-white mt-5 '} style={{width: '400px'}}
                            onClick={() => addToCart()}>
                        <div className={'text-2xl'}>Mua ngay</div>
                        <div>Giao tận nơi hoặc nhận tại cửa hàng</div>
                    </button>
                </div>

                <div className={'flex mt-3'}>
                    <img src={`${imageSrc}tick.png`} className={'w-5 h-5 mr-2'}/>
                    <span className={'font-medium'}>Bảo hành chính hãng 12 tháng.</span>
                </div>
                <div className={'flex mt-3'}>
                    <img src={`${imageSrc}tick.png`} className={'w-5 h-5 mr-2'}/>
                    <span className={'font-medium'}>Hỗ trợ đổi mới trong 7 ngày.</span>
                </div>
                <div className={'flex mt-3'}>
                    <img src={`${imageSrc}tick.png`} className={'w-5 h-5 mr-2'}/>
                    <span className={'font-medium'}>Miễn phí giao hàng toàn quốc.</span>
                </div>

            </div>
        </div>
    );
};