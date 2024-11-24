import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {imageSrc} from "@/constants/index.ts";

export default function ProductManagement() {
    return (
        <Tabs className={'grid grid-cols-12 grid-rows-12 p-0'} style={{height: '400px'}}>
            <div className={'col-span-3 row-span-12 mr-5 rounded bg-white  grid grid-row-12 '}>
                <div className={'row-span-2 flex items-center border-b-2 px-5'}>
                    <img src={`${imageSrc}userAvatar.png`} className={'w-16 h-16 '}/>
                    <span className={'font-bold text-xl text-center ml-5'}>Nguyen Truong</span>
                </div>
                <div className={' row-span-11 mt-4'}>
                    <TabsList className={'flex-col px-5 bg-white'} style={{width: '100%'}}>
                        <TabsTrigger value="account"
                                     className={'my-2 data-[state=active]:shadow-none flex justify-start'}
                                     style={{width: '100%'}}>
                            <img src={''}/>
                        </TabsTrigger>
                    </TabsList>
                </div>
            </div>
            <div className={'col-span-9 row-span-12 rounded bg-white'}>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </div>

        </Tabs>

    )
};