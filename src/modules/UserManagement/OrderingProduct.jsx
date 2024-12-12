import {useEffect, useState} from "react";
import {orderApis} from "@/apis/orderApis.js";
import {backEndImageSrc} from "@/constants/index.ts";
import stringHelper from "@/utils/stringHelper.js";

// eslint-disable-next-line react/prop-types
export default function OrderingProduct({username}) {
    const [order, setOrder] = useState(null);
    useEffect(() => {
        const fetchOrder = async () => {
            const data = await orderApis.getOrdersByUsername(username);
            setOrder(data);
        };
        fetchOrder();
    }, [username]);
    if (order===null) {
        return <div>Loading...</div>;
    }
    return (
        <div className={'p-4 rounded bg-white overflow-auto'} style={{height:'470px'}} >
            {
                order.orderDetails.map((orderDetail) => (
                        <div className={'flex my-4 justify-between border-2 rounded p-3'}>
                            <div className={'flex'}>
                                <img src={`${backEndImageSrc + orderDetail.product.thumbnail}`}
                                     className={'w-28 h-28'}/>
                                <div className={'px-3'}>
                                    <div className={'font-bold'}>{orderDetail.product.productName}</div>
                                    <div className={'text-red-600 font-bold text-left mt-1'}>
                                        {stringHelper.formatPrice(orderDetail.product.price)}
                                    </div>
                                </div>
                            </div>
                            <div className={'text-left font-bold '}>
                                <div className={'my-1'}>Người nhận: {order.customerName}</div>
                                <div className={'my-1'}>Số điện thoại người nhận: {order.phoneNumber}</div>
                                <div className={'my-1'}>Địa chỉ nhận hàng: {order.shippingAddress}</div>
                                <div className={'my-1'}>Ngày đặt hàng: {order.orderDate}</div>
                                <div className={'my-1'}>Ngày nhận hàng: {order.receiveDate}</div>
                                <div className={'my-1'}>Phương thức thanh toán: {order.paymentMethod}</div>
                            </div>
                        </div>
                    )
                )
            }

        </div>
    );
};