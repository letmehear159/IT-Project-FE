import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import OrderingProduct from "@/modules/UserManagement/OrderingProduct.jsx";

export default function ProductManagement({user}) {
    return (
        <div>
            <div className={'text-left font-bold text-gray-600 text-2xl ml-12 mb-4'}>Quản lý đơn hàng</div>
            <Tabs className={' pb-4'}>
                <TabsList className={'grid grid-cols-12 bg-white font-bold '}>
                    <TabsTrigger value={'all'}
                                 className={'col-span-3 font-bold  mx-2 data-[state=active]:shadow-none bg-white'}>
                        TẤT CẢ
                    </TabsTrigger>
                    <TabsTrigger className={'col-span-3 font-bold mx-2 data-[state=active]:shadow-none  bg-white'}>
                        ĐANG XỬ LÝ
                    </TabsTrigger>
                    <TabsTrigger className={'col-span-3 font-bold  mx-2 data-[state=active]:shadow-none bg-white'}>
                        ĐANG VẬN CHUYỂN
                    </TabsTrigger>
                    <TabsTrigger className={'col-span-3 font-bold mx-2 data-[state=active]:shadow-none bg-white'}>
                        HOÀN THÀNH
                    </TabsTrigger>
                </TabsList>
                <TabsContent value={'all'} ><OrderingProduct  username={user.username}/></TabsContent>
            </Tabs>
        </div>

    )
};