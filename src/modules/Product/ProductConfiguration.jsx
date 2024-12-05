import stringHelper from "@/utils/stringHelper.js";
import {useState} from "react";


export default function ProductConfiguration({product}) {
    const specifications = stringHelper.filterSpecificationsWithBrief(product.specifications);

    return (
        <div className={' pl-4'}>
            <div className={' text-left bg-white p-5'} style={{borderRadius: '4px'}}>
                <div className={'font-bold text-3xl text-gray-700'}>Cấu hình</div>
                <div style={{border: '1px solid #7A7A7A', borderRadius: '5px'}} className={'mt-5'}>
                    {

                        specifications.map((spec, i) =>
                            <div
                                className={`flex ${i === 0 || i === (specifications.length - 1) ? 'rounded' : ''}
                                     ${i % 2 === 0 ? 'bg-secondary' : 'bg-white'} text-xl grid grid-cols-12`}
                                key={spec.specId}>
                                <div className={'col-span-5 h-14  p-4 p-l-8'}>
                                    <div> {spec.specKey}</div>
                                </div>
                                <div className={' col-span-7 p-4'}>
                                    <div>
                                        {spec.briefSpecValue}
                                    </div>
                                </div>
                            </div>
                        )

                    }
                </div>
                <div className={'grid grid-cols-2 mt-3'}>
                    <button className={'bg-white text-xl border-blue-500 border- w col-span-2'}>Xem cấu hình chi tiết
                    </button>
                </div>
            </div>
        </div>
    )
        ;
};