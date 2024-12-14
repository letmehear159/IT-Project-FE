import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "/src/components/common/dialog/dialog.jsx"
import {useEffect, useState} from "react";
import {userApis} from "@/apis/userApis.js";
import {orderApis} from "@/apis/orderApis.js";


export default function ShippingAddress() {
    const [receiverName, setReceiverName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [shippingAddresses, setShippingAddresses] = useState(null);

    const username = localStorage.getItem('username');

    const addUserShippingAddress = async () => {
        const ret = await userApis.createShippingAddress(username, receiverName, phoneNumber, city, detailAddress);
        setShippingAddresses([...shippingAddresses, ret]);
    }

    useEffect(() => {
        const fetchOrder = async () => {
            const data = await userApis.getUserShippingAddress(username);
            if (data !== null) {
                setShippingAddresses(data);
            }
        };
        fetchOrder();
    }, []);

    console.log(shippingAddresses);

    return (
        <div className={'p-4 font-medium '} >
            <div className={'flex justify-between pb-8 '}>
                <div className={'text-left font-bold text-gray-600 text-2xl'}>Thông tin tài khoản</div>
                <Dialog>
                    <DialogTrigger className={'bg-blue-700 text-white font-bold '}>+ Thêm địa chỉ mới</DialogTrigger>
                    <DialogContent className={''}>
                        <div className={'font-bold text-gray-700 text-xl border-b-2 pb-3'}>ĐỊA CHỈ MỚI</div>
                        <div className={'font-bold text-gray-700'}>Thông tin khách hàng</div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            addUserShippingAddress();
                        }}>
                            <input value={receiverName}
                                   onChange={e => setReceiverName(e.target.value)}
                                   type={'text'} name={'fullName'}
                                   placeholder={'Nhập Họ Tên'}
                                   className={'bg-white border-2 rounded px-3 h-12 '}
                                   style={{width: '100%'}}/>
                            <input value={phoneNumber}
                                   onChange={e => setPhoneNumber(e.target.value)}
                                   type={'text'}
                                   name={'phoneNumber'}
                                   placeholder={'Nhập Số điện thoại'}
                                   className={'bg-white border-2 rounded px-3 h-12 mt-4'}
                                   style={{width: '100%'}}/>
                            <div className={'font-bold text-gray-700 mt-3'}>Địa chỉ</div>
                            <div className={'grid grid-cols-12 '}>
                                <input value={city}
                                       onChange={e => setCity(e.target.value)}
                                       type={'text'}
                                       name={'city'}
                                       placeholder={'Nhập Tỉnh Thành'}
                                       className={'bg-white border-2 rounded px-3 h-12 mt-4 col-span-5 mr-5'}/>
                                <input value={detailAddress}
                                       onChange={e => setDetailAddress(e.target.value)}
                                       type={'text'}
                                       name={'detailAddress'}
                                       placeholder={'Nhập Địa chỉ cụ thể'}
                                       className={'bg-white border-2 rounded px-3 h-12 mt-4 col-span-7'}/>
                            </div>
                            <button className={'bg-red-600 text-white mt-5'} style={{width: '100%'}}>Hoàn thành</button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <div style={{ height:'490px'}} className={'overflow-auto'}>
            {
                shippingAddresses === undefined || shippingAddresses === null ? (
                    <div className={'font-bold'}>Hiện tại bạn chưa thêm địa chỉ nào</div>
                ) : (
                    shippingAddresses.length !== 0 &&
                    shippingAddresses.map((shippingAddress) => (
                        <div className={' border-t-2 p-5'}>
                            <div className={'flex mt-4 justify-between'}>
                                <div>
                                    <span>{shippingAddress.receiverName}</span>
                                    <span className={'text-gray-500 ml-4'}>{shippingAddress.phoneNumber}</span>
                                </div>
                                <button className={' bg-white '} style={{border: '1px solid black'}}>Thiết lập mặc định
                                </button>
                            </div>
                            <div className={'flex '}>
                                <span
                                    className={'text-gray-500 '}>{shippingAddress.detailAddress + ', ' + shippingAddress.city}</span>
                            </div>
                        </div>

                    ))
                )
            }
            </div>

        </div>
    );
};