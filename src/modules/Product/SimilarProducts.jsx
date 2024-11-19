import {imageSrc} from "@/constants/index.ts";
import React from "react";

export default function SimilarProducts() {
    return (
        <div className={' pl-4'}>
            <div className={' text-left bg-white p-5'} style={{borderRadius: '4px'}}>
                <div className={'font-bold text-2xl text-gray-700'}>Sản phẩm tương tự</div>
                <div className={' grid flex grid-cols-12 justify-items-end mt-8'}>
                    <div className={'col-span-4 p-3'}>
                        <img src={`${imageSrc}keyboard-eighth.webp`} className={''}/>
                    </div>
                    <div className={'col-span-7'}>
                        <div className={'font-bold text-xl text-gray-700'}> Bản phím Durgod MK 75</div>
                        <div className={'flex-col items-end mt-2 '}>
                            <div className=" line-through text-left text-gray-500 text-xl ">10.490.000đ</div>

                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-red-600">9.990.000₫</span>
                                <span
                                    className="pro-label-on-sale w-12 h-6 flex items-center justify-center "
                                    style={{borderRadius: '5px'}}>
                    <span>-5%</span>
                    </span>
                            </div>

                        </div>

                    </div>

                </div>
                <div className={' grid flex grid-cols-12 justify-items-end mt-8'}>
                    <div className={'col-span-4 p-3'}>
                        <img src={`${imageSrc}keyboard-eighth.webp`} className={''}/>
                    </div>
                    <div className={'col-span-7'}>
                        <div className={'font-bold text-xl text-gray-700'}> Bản phím Durgod MK 75</div>
                        <div className={'flex-col items-end mt-2 '}>
                            <div className=" line-through text-left text-gray-500 text-xl ">10.490.000đ</div>

                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-red-600">9.990.000₫</span>
                                <span
                                    className="pro-label-on-sale w-12 h-6 flex items-center justify-center "
                                    style={{borderRadius: '5px'}}>
                    <span>-5%</span>
                    </span>
                            </div>

                        </div>

                    </div>

                </div>
                <div className={' grid flex grid-cols-12 justify-items-end mt-8'}>
                    <div className={'col-span-4 p-3'}>
                        <img src={`${imageSrc}keyboard-eighth.webp`} className={''}/>
                    </div>
                    <div className={'col-span-7'}>
                        <div className={'font-bold text-xl text-gray-700'}> Bản phím Durgod MK 75</div>
                        <div className={'flex-col items-end mt-2 '}>
                            <div className=" line-through text-left text-gray-500 text-xl ">10.490.000đ</div>

                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-red-600">9.990.000₫</span>
                                <span
                                    className="pro-label-on-sale w-12 h-6 flex items-center justify-center "
                                    style={{borderRadius: '5px'}}>
                    <span>-5%</span>
                    </span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};