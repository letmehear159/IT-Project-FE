export default function UserInformation() {
    return (
        <div className={'p-4 font-medium'}>
            <div className={'text-left font-bold text-gray-600 text-2xl'}>Thông tin tài khoản</div>
            <form className={'mt-8'}>
                <div className={'grid grid-cols-12 items-center'}>
                    <label className={'col-span-2 text-right px-8'}>Họ tên</label>
                    <input className={'col-span-5 bg-white border-2 rounded h-10 px-4'} name={'fullName'}
                           value={'Nguyen Truong'}></input>
                </div>
                <div className={'grid grid-cols-12 mt-5'}>
                    <label className={'col-span-2 text-right px-8'}>Giới tính</label>
                    <div className={'col-span-5 flex items-center'}>
                        <input type="radio" className="h-4 w-4 form-radio" name={'gender'} value={'Male'}/>
                        <div className={'mr-8 ml-2'}>Nam</div>
                        <input type="radio" className="h-4 w-4 form-radio border-2 " name={'gender'} value={'Female'}/>
                        <div className={'ml-2'}>Nữ</div>
                    </div>
                </div>
                <div className={'grid grid-cols-12 mt-5 items-center'}>
                    <label className={'col-span-2 text-right pr-8'}>Số điện thoại</label>
                    <input className={'col-span-5 bg-white border-2 rounded h-10 px-4'} name={'phoneNumber'}
                           value={'Nguyen Truong'}></input>
                </div>

                <div className={'grid grid-cols-12 mt-5 items-center'}>
                    <label className={'col-span-2 text-right pr-8'}>Email</label>
                    <input className={'col-span-5 bg-white border-2 rounded h-10 px-4'} name={'email'}
                           value={'Nguyen Truong'}></input>
                </div>

                <div className={'grid grid-cols-12 mt-5 items-center '}>
                    <label className={'col-span-2 text-right pr-8'}>Ngày sinh</label>
                    <div className={'col-span-5 justify-between flex'}>
                        <select className={'bg-white border-2 rounded px-3'} name={'date'}
                                style={{width: '120px', height: '40px'}}>
                            <option selected={true}>Ngày</option>
                            {Array.from({length: 31}).map((_, number) => {
                                return (
                                    <option key={number} value={number + 1}>{number + 1}</option>
                                )
                            })}
                        </select>
                        <select className={'bg-white border-2 rounded px-3'} name={'month'}
                                style={{width: '120px', height: '40px'}}>
                            <option selected={true}>Tháng</option>
                            {Array.from({length: 12}).map((_, number) => {
                                return (
                                    <option key={number} value={number + 1}>{number + 1}</option>
                                )
                            })}
                        </select>
                        <select className={'bg-white border-2 rounded px-3'} name={'month'}
                                style={{width: '120px', height: '40px'}}>
                            <option selected={true}>Năm</option>
                            {Array.from({length: 61}).map((_, number) => {
                                return (
                                    <option key={number} value={number + 1964}>{number + 1964}</option>
                                )
                            })}
                        </select>
                    </div>

                </div>

            </form>
        </div>
    );
};