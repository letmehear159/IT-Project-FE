import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

export default function ProductManagement() {
    return (
        <div>
            <div className={'text-left font-bold text-gray-600 text-2xl ml-12 mb-4'}>Quản lý đơn hàng</div>
            <Tabs className={'border-b-2 pb-4'}>
                <TabsList className={'grid grid-cols-12 bg-white font-bold '}>
                    <TabsTrigger className={'col-span-3 font-bold  mx-2 data-[state=active]:shadow-none'}>
                        TẤT CẢ
                    </TabsTrigger>
                    <TabsTrigger className={'col-span-3 font-bold mx-2 data-[state=active]:shadow-none '}>
                        ĐANG XỬ LÝ
                    </TabsTrigger>
                    <TabsTrigger className={'col-span-3 font-bold  mx-2 data-[state=active]:shadow-none'}>
                        ĐANG VẬN CHUYỂN
                    </TabsTrigger>
                    <TabsTrigger className={'col-span-3 font-bold mx-2 data-[state=active]:shadow-none'}>
                        HOÀN THÀNH
                    </TabsTrigger>
                </TabsList>

            </Tabs>
        </div>

    )
};