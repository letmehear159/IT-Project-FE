import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "/src/components/common/dialog/dialog.jsx"


export default function ShippingAddress() {
    return (
        <div className={'p-4 font-medium'}>
            <div className={'flex justify-between pb-8 '}>
                <div className={'text-left font-bold text-gray-600 text-2xl'}>Thông tin tài khoản</div>
                <Dialog>
                    <DialogTrigger className={'bg-blue-700 text-white font-bold '}>+ Thêm địa chỉ mới</DialogTrigger>
                    <DialogContent className={''}>
                        <div className={'font-bold text-gray-700 text-xl border-b-2 pb-3'}>ĐỊA CHỈ MỚI</div>
                        <div className={'font-bold text-gray-700'}>Thông tin khách hàng</div>
                        <form>
                            <input type={'text'} name={'fullName'} placeholder={'Nhập Họ Tên'}
                                   className={'bg-white border-2 rounded px-3 h-12 '} style={{width: '100%'}}/>
                            <input type={'text'} name={'phoneNumber'} placeholder={'Nhập Số điện thoại'}
                                   className={'bg-white border-2 rounded px-3 h-12 mt-4'} style={{width: '100%'}}/>
                            <div className={'font-bold text-gray-700 mt-3'}>Địa chỉ</div>
                            <div className={'grid grid-cols-12 '}>
                                <input type={'text'} name={'city'} placeholder={'Nhập Tỉnh Thành'}
                                       className={'bg-white border-2 rounded px-3 h-12 mt-4 col-span-5 mr-5'}/>
                                <input type={'text'} name={'detailAddress'} placeholder={'Nhập Địa chỉ cụ thể'}
                                       className={'bg-white border-2 rounded px-3 h-12 mt-4 col-span-7'}/>
                            </div>
                            <button className={'bg-red-600 text-white mt-5'} style={{width: '100%'}}>Hoàn thành</button>
                        </form>
                    </DialogContent>
                </Dialog>


            </div>
            <div className={' border-t-2'}>
                <div className={'flex mt-4 justify-between'}>
                    <div>
                        <span>John Smith | </span>
                        <span className={'text-gray-500 ml-1'}>0971487037</span>
                    </div>
                    <button className={' bg-white '} style={{border: '1px solid black'}}>Thiết lập mặc định</button>

                </div>
                <div className={'flex '}>
                    <span className={'text-gray-500 '}>4, Thị trấn Tân Túc, Huyện Bình Chánh, Hồ Chí Minh, Vietnam </span>
                </div>
            </div>
        </div>
    );
};