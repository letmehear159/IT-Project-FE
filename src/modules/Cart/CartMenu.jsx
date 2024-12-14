import CartProduct from "@/modules/Cart/CartProduct.jsx";
import stringHelper from "@/utils/stringHelper.js";
import {useEffect, useState} from "react";
import {orderDetailApis} from "@/apis/orderDetailApis.js";
import {imageSrc} from "@/constants/index.ts";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {orderApis} from "@/apis/orderApis.js";
import {userApis} from "@/apis/userApis.js";
import {redirect} from "react-router-dom";

export default function CartMenu({initialOrderDetails}) {
    const [orderDetails, setOrderDetails] = useState(initialOrderDetails);
    const [shippingOption, setShippingOption] = useState('Express');
    const [paymentOption, setPaymentOption] = useState('Trả tiền khi nhận hàng (COD)');
    const [shippingAddresses, setShippingAddresses] = useState([]);
    const username = localStorage.getItem('username');
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const handleCheckboxChange = (id) => {
        setSelectedAddressId(id);
    };


    useEffect(() => {
        const fetchOrder = async () => {
            const data = await userApis.getUserShippingAddress(username);
            setShippingAddresses(data);
        };
        fetchOrder();
    }, []);

    const handleDeleteOrderDetail = async (orderDetailId) => {
        const success = await orderDetailApis.deleteOrderDetail(orderDetailId);
        if (success) {
            console.log('Delete success');
            const updatedOrderDetails = orderDetails.filter(detail => detail.orderDetailId !== orderDetailId);
            setOrderDetails(updatedOrderDetails);
        }
    };

    const handleSelectShippingAddress = (customerName, phoneNumber, detailAddress) => {
        setCustomerName(customerName);
        setDetailAddress(detailAddress);
        setPhoneNumber(phoneNumber);
    }

    const handleShippingSelect = (event) => {
        setShippingOption(event.target.value);
    };

    const handlePaymentSelect = (event) => {
        setPaymentOption(event.target.value);
    };

    const filterOrderDetail = (orderDetails) => {
        return orderDetails.filter((orderDetail) => orderDetail.order === null);
    }


    const createOrder = async () => {
        const ret = await orderApis.createOrder(username, 'Nguyen Truong', detailAddress, paymentOption, shippingOption, phoneNumber,
            filterOrderDetail(orderDetails).map((orderDetail) => {
                return orderDetail.orderDetailId;
            }));
    }

    const switchStepTwo = () => {
        document.getElementById('step-2').click();
    }
    return (
        <div className={'bg-white p-4 border-b'}>
            {
                orderDetails.length > 0 ? (
                    <div style={{width: '600px'}} className={'  rounded mt-4 px-5 py-3 mx-auto'}>
                        <Tabs style={{height: '800px'}}>
                            <TabsList className={'grid grid-cols-2'}>
                                <TabsTrigger value={'step-1'}
                                             id={'step-1'}
                                             className={'[data-state]:active bg-white mx-1 data-[state=active]:bg-black data-[state=active]:text-white'}>
                                    Lựa chọn sản phẩm
                                </TabsTrigger>
                                <TabsTrigger value={'step-2'}
                                             id={'step-2'}
                                             className={'text-black mx-1 bg-white data-[state=active]:bg-black data-[state=active]:text-white'}>
                                    Thông tin giao hàng
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value={'step-1'}>
                                <div className={'pb-5'}>
                                    {
                                        // eslint-disable-next-line react/prop-types
                                        orderDetails.map(orderDetail => (
                                            orderDetail.order === null &&
                                            <CartProduct
                                                onDelete={handleDeleteOrderDetail}
                                                orderDetail={orderDetail}/>
                                        ))
                                    }
                                </div>
                                <div className={'flex py-4 border-b-2'}>
                                    <button className={'bg-transparent text-blue-700'}
                                            style={{border: '1px solid gray'}}>Sử
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

                            </TabsContent>
                            <TabsContent value={'step-2'}>
                                <div className={'pb-5 mt-8'}>
                                    <div className={'flex my-5'}>
                                        <label className={'mr-4 font-bold'}>Phương thức vận chuyển hàng:</label>
                                        <select className={'bg-transparent border-2 rounded'}
                                                value={shippingOption}
                                                onChange={handleShippingSelect}
                                        >
                                            <option>Express</option>
                                            <option>Standard</option>
                                            <option>Economy</option>
                                            <option>Super Express</option>
                                        </select>
                                    </div>

                                    <div className={'flex my-5'}>
                                        <label className={'mr-4 font-bold'}>Phương thức thanh toán:</label>
                                        <select className={'bg-transparent  border-2 rounded'}
                                                value={paymentOption}
                                                onChange={handlePaymentSelect}
                                        >
                                            <option>Trả tiền khi nhận hàng (COD)</option>
                                            <option>Bằng ví trả sau</option>
                                            <option>Bằng thẻ ghi nợ/tín dụng</option>
                                        </select>
                                    </div>

                                    <div className={'flex'}>
                                        <label className={'font-bold text-left'}>Thông tin người nhận hàng: </label>
                                    </div>
                                    <div>
                                        {
                                            shippingAddresses.map((info) => (
                                                <div className={' border rounded hover:bg-gray-300 my-4 '}
                                                >
                                                    <div className={' my-2 flex'}>
                                                        <div>
                                                            <span>Tên người nhận: {info.receiverName}</span>
                                                        </div>

                                                    </div>
                                                    <div className={' my-2 flex'}>
                                                            <span
                                                                className={' '}>Số điện thoại: {info.phoneNumber}</span>
                                                    </div>
                                                    <div className={'flex my-2'}>
                                                                <span
                                                                    className={' '}>{info.detailAddress + ', ' + info.city}</span>
                                                    </div>
                                                    <div className={'flex'}>
                                                        <input type={"checkbox"}
                                                               className={'text-white  hover:cursor-pointer'}
                                                               style={{height: '30px', width: '30px'}}
                                                               checked={selectedAddressId === info.id}
                                                               onChange={() => {
                                                                   handleCheckboxChange(info.id);
                                                                   handleSelectShippingAddress(info.customerName, info.phoneNumber, `${info.detailAddress}, ${info.city}`);
                                                               }

                                                               }
                                                        />
                                                        <div className={'flex items-end font-bold ml-3'}>
                                                            <div>Chọn làm thông tin nhận hàng</div>

                                                        </div>
                                                    </div>

                                                </div>
                                            ))
                                        }

                                    </div>


                                    <button onClick={() => {
                                        createOrder();
                                    }} className={'bg-red-600 text-center font-bold text-white border h-16'}
                                            style={{width: '100%'}}>
                                        Đặt hàng ngay
                                    </button>
                                </div>
                            </TabsContent>
                        </Tabs>

                    </div>
                ) : (<div style={{width: '600px'}} className={'font-bold mx-auto mt-4 px-5 py-3 '}>
                    <div className={'flex justify-center'}>
                        <img src={`${imageSrc}empty-cart.png`} className={'w-80 '}/>
                    </div>
                    <div className={'mt-8 ml-8'}>Hiện tại bạn chưa đặt món hàng nào.
                    </div>
                    <a className={'py-4 hover:text-red-600 ml-8'} href={'/'}>Lựa chọn sản phẩm</a>

                </div>)
            }
        </div>

    );
};