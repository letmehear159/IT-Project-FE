import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {imageSrc} from "@/constants/index.ts";
import UserInformation from "@/modules/UserManagement/UserInformation.jsx";
import ShippingAddress from "@/modules/UserManagement/ShippingAddress.jsx";
import ProductManagement from "@/modules/UserManagement/ProductManagement.jsx";

export default function UserManagement() {
    return (
        <Tabs className={'grid grid-cols-12 grid-rows-12 p-0'} style={{height: '400px'}}>
            <div className={'col-span-3 row-span-12 mr-5 rounded bg-white  grid grid-row-12 '}>
                <div className={'row-span-2 flex items-center border-b-2 px-5'}>
                    <img src={`${imageSrc}profile.png`} className={'w-12 h-12 '}/>
                    <span className={'font-bold text-xl text-center ml-5'}>Nguyen Truong</span>
                </div>
                <div className={' row-span-11 mt-4'}>
                    <TabsList className={'flex-col  bg-white'} style={{width: '100%'}}>
                        <TabsTrigger value="account"
                                     className={'my-2 text-black data-[state=active]:shadow-none data-[state=active]:text-red-600 bg-white flex justify-start'}
                                     style={{width: '100%'}}>
                            <img src={`${imageSrc}user (1).png`} className={'w-5 h-5'}/>
                            <span className={'ml-4 '} style={{fontSize: '17px'}}>Thông tin tài khoản</span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsList className={'flex-col mt-3 bg-white'} style={{width: '100%'}}>
                        <TabsTrigger value="shippingAddress"
                                     className={'my-2 text-black data-[state=active]:shadow-none data-[state=active]:text-red-600 bg-white  flex justify-start'}
                                     style={{width: '100%'}}>
                            <img src={`${imageSrc}pin.png`} className={'w-5 h-5'}/>
                            <span className={'ml-4 '} style={{fontSize: '17px'}}>Sổ địa chỉ</span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsList className={'flex-col mt-3 bg-white'} style={{width: '100%'}}>
                        <TabsTrigger value="productManagement"
                                     className={'my-2 text-black data-[state=active]:shadow-none data-[state=active]:text-red-600 bg-white flex justify-start'}
                                     style={{width: '100%'}}>
                            <img src={`${imageSrc}shopping-bag.png`} className={'w-5 h-5'}/>
                            <span className={'ml-4 '} style={{fontSize: '17px'}}>Quản lý đơn hàng</span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsList className={'flex-col mt-3 bg-white'} style={{width: '100%'}}>
                        <TabsTrigger value="logout"
                                     className={'my-2 text-black data-[state=active]:shadow-none data-[state=active]:text-red-600 bg-white flex justify-start'}
                                     style={{width: '100%'}}>
                            <img src={`${imageSrc}exit-door.png`} className={'w-5 h-5 ml-1'}/>
                            <span className={'ml-4 '} style={{fontSize: '17px'}}>Đăng xuất</span>
                        </TabsTrigger>
                    </TabsList>
                </div>
            </div>
            <div className={'col-span-9 row-span-12 rounded bg-white'}>
                <TabsContent value="account"><UserInformation/></TabsContent>
                <TabsContent value="shippingAddress"><ShippingAddress/></TabsContent>
                <TabsContent value="productManagement"><ProductManagement/></TabsContent>
                <TabsContent value="logout">Change your password here.</TabsContent>
            </div>

        </Tabs>

    )
};