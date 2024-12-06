import CartProduct from "@/modules/Cart/CartProduct.jsx";

export default function CartMenu({orderDetails}) {
    return (
        <div style={{width: '600px'}} className={'bg-white rounded px-5 py-3 mx-auto'}>
            <div className={'border-b-2 pb-5'}>
                {
                    // eslint-disable-next-line react/prop-types
                    orderDetails.map(orderDetail => (
                        // eslint-disable-next-line react/jsx-key
                        <CartProduct orderDetail={orderDetail}/>
                    ))
                }
            </div>
            <div className={'flex py-4 border-b-2'}>
                <button className={'bg-transparent text-blue-700'} style={{border: '1px solid gray'}}>Sử dụng mã giảm
                    giá
                </button>
            </div>
            <div className={'flex justify-between py-3'}>
                <span className={'font-bold'}>Tổng tiền: </span>
                <span className={'font-bold text-xl text-red-600'}>80,970.000</span>
            </div>
            <button className={'bg-red-600 text-center font-bold text-white border h-16'} style={{width: '100%'}}>
                Đặt hàng ngay
            </button>
        </div>
    )
};