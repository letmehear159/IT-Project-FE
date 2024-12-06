import {backEndImageSrc, imageSrc} from "@/constants/index.ts";

export default function CartProduct({orderDetail}) {
    console.log(orderDetail);
    return (
        <div className={'flex justify-between py-4'}>
            <div className={'flex'}>
                <div>
                    <img src={`${backEndImageSrc}${orderDetail.product.thumbnail}`} className={'w-24 h-24'}/>
                    <div className={'flex justify-center mt-2'}>
                        <img src={`${imageSrc}delete.png`} className={'w-4 h-4 mr-2'}/>
                        <a className={'text-gray-700'}>Xóa</a>
                    </div>
                </div>
                <div className={'font-bold'}>{orderDetail.product.productName}</div>
            </div>
            <div>
                <div className={'font-bold text-red-600 text-right'}>{orderDetail.product.price}</div>
                <div className={'font-medium text-sm text-right line-through'}>{orderDetail.product.price}</div>
                <div className={'flex mt-5'}>
                    <button className={'bg-transparent rounded-none w-4 h-6 py-1 px-3 flex justify-center items-center'}
                            style={{border: '1px solid gray'}}>
                        <span>-</span>
                    </button>
                    <span className={'items-center justify-center w-8 flex'} style={{
                        borderTop: '1px  solid gray',
                        borderBottom: '1px  solid gray',
                        height: '24px'
                    }}><span>1</span></span>
                    <button
                        className={'bg-transparent rounded-none h-6 py-1 w-4 h-2 px-3 flex justify-center items-center'}
                        style={{border: '1px solid gray'}}>
                        <span>+</span>
                    </button>
                </div>
            </div>
        </div>
    )
};