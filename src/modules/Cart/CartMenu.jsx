import CartProduct from "@/modules/Cart/CartProduct.jsx";
import stringHelper from "@/utils/stringHelper.js";
import {useState} from "react";
import {orderDetailApis} from "@/apis/orderDetailApis.js";
import {imageSrc} from "@/constants/index.ts";

export default function CartMenu({initialOrderDetails}) {
    const [orderDetails, setOrderDetails] = useState(initialOrderDetails);
    const handleDeleteOrderDetail = async (orderDetailId) => {
        const success = await orderDetailApis.deleteOrderDetail(orderDetailId);
        if (success) {
            console.log('Delete success');
            const updatedOrderDetails = orderDetails.filter(detail => detail.orderDetailId !== orderDetailId);
            setOrderDetails(updatedOrderDetails);
        }
    };
    return (
        <div className={'bg-white p-4 border-b'}>

            {
                orderDetails.length > 0 ? (
                    <div style={{width: '600px'}} className={'  rounded mt-4 px-5 py-3 mx-auto'}>
                        <div className={'border-b-2 pb-5'}>
                            {
                                // eslint-disable-next-line react/prop-types
                                orderDetails.map(orderDetail => (
                                    // eslint-disable-next-line react/jsx-key
                                    <CartProduct
                                        onDelete={handleDeleteOrderDetail}
                                        orderDetail={orderDetail}/>
                                ))
                            }
                        </div>
                        <div className={'flex py-4 border-b-2'}>
                            <button className={'bg-transparent text-blue-700'} style={{border: '1px solid gray'}}>Sử
                                dụng mã
                                giảm
                                giá
                            </button>
                        </div>
                        <div className={'flex justify-between py-3'}>
                            <span className={'font-bold'}>Tổng tiền:  </span>
                            <span
                                className={'font-bold text-xl text-red-600'}>{stringHelper.getTotalPriceFromCart(orderDetails)}</span>
                        </div>
                        <button className={'bg-red-600 text-center font-bold text-white border h-16'}
                                style={{width: '100%'}}>
                            Đặt hàng ngay
                        </button>
                    </div>
                ) : (<div style={{width: '600px'}} className={'font-bold mx-auto mt-4 px-5 py-3 '}>
                    <div className={'flex justify-center'}>
                        <img src={`${imageSrc}empty-cart.png`} className={'w-80 '}/>
                    </div>
                    <div className={'mt-8 ml-8'}>Hiện tại bạn chưa đặt món hàng nào.
                    </div>
                    <a className={'py-4 hover:text-red-600 ml-8' } href={'/'}>Lựa chọn sản phẩm</a>

                </div>)
            }
        </div>

    );
};