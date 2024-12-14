import {useEffect, useState} from "react";
import {orderApis} from "@/apis/orderApis.js";
import {backEndImageSrc, imageSrc} from "@/constants/index.ts";
import stringHelper from "@/utils/stringHelper.js";

// eslint-disable-next-line react/prop-types
export default function OrderingProduct({username}) {
    const [orderList, setOrderList] = useState(null);
    useEffect(() => {
        const fetchOrder = async () => {
            const data = await orderApis.getOrdersByUsername(username);
            setOrderList(data);
        };
        fetchOrder();
    }, []);
    console.log(orderList);
    return (
        <div className={'p-4 rounded bg-white overflow-auto'} style={{height: '470px'}}>
            {
                orderList !== null && orderList.length > 0
                    ?
                    orderList.map((order) => (
                        order !== null && order.orderDetails.length > 0 &&
                        (order.orderDetails.map((orderDetail) => (
                            <div className={'flex my-4 justify-between border-2 rounded p-3'}>
                                <div>
                                    <div className={'flex'}>
                                        <img src={`${backEndImageSrc + orderDetail.product.thumbnail}`}
                                             className={'w-28 h-28'}/>
                                        <div className={'px-3'}>
                                            <div
                                                className={'font-bold text-left'}>{orderDetail.product.productName}</div>
                                            <div className={'text-red-600 font-bold text-left mt-1'}>
                                                {stringHelper.formatPrice(orderDetail.product.price)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'text-left font-bold '}>
                                        <div className={'my-1'}>Người nhận: {order.customerName}</div>
                                        <div className={'my-1'}>Số điện thoại người nhận: {order.phoneNumber}</div>
                                        <div className={'my-1'}>Địa chỉ nhận hàng: {order.shippingAddress}</div>
                                    </div>
                                </div>
                                <div className={'text-left font-bold '}>
                                    <div className={'my-1'}>Ngày đặt hàng: {order.orderDate}</div>
                                    <div className={'my-1'}>Ngày nhận hàng: {order.receiveDate}</div>
                                    <div className={'my-1'}>Phương thức thanh toán: {order.paymentMethod}</div>
                                    <div className={'my-1'}>Phương thức vận chuyện: {order.shippingMethod}</div>
                                    <div className={'my-1'}>Trạng thái hàng: {order.shippingStatus}</div>
                                    <div className={'my-1'}>Thanh toán tiền hàng: {order.paymentStatus}</div>
                                </div>
                            </div>
                        )))

                    ))
                    :


                    (<div>
                        <div className={'flex justify-center'}>
                            <img src={`${imageSrc}list.png`} className={'w-52 '}/>
                        </div>
                        <div>Danh sách đơn của bạn đang trống</div>
                    </div>)
            }

        </div>
    );
};