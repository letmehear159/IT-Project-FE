import {imageSrc} from "@/constants/index.ts";
import {Button} from "@/components/ui/button.jsx";
import colors from "tailwindcss/colors.js";
import {Input} from "@/components/ui/input.jsx";
import {useEffect, useRef, useState} from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function LayoutHeader() {

    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setIsFocused(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`flex  py-5`} style={{backgroundColor: '#FF0000'}}>
            <img src={`${imageSrc}microprocessor (1).png`} className={'w-10 h-10'}/>
            <div className="flex items-center ">
                <div className="text-white font-bold ml-1">COMPONENTS</div>
            </div>
            <div className={'flex items-center rounded bg-gray-500 cursor-pointer ml-3 px-2 py-0.5'}
                 style={{
                     backgroundColor: '#BE1529',
                     width: '105px', height: '42px'
                 }}>
                <img src={`${imageSrc}menu.png`} className={'w-4/12 h-8'}/>
                <div className={'font-bold  text-sm scale-90 text-white w-8/12 '} style={{font: '10px'}}>Danh mục</div>
            </div>
            <div className={`flex bg-white rounded ml-2 box-border border-2`}
                 style={{border: `${isFocused ? '2px solid black' : ''}`}}>
                <input
                    ref={inputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={'ml-2 bg-transparent border-opacity-0  '} style={{
                    width: '300px', height: '42px',
                    outline: '0'
                }}
                    placeholder={"Bạn cần tìm gì"}/>
                <div className={'cursor-pointer'}>
                    <img src={`${imageSrc}search.png`} className={'w-5 h-5 ml-2 mr-2 mt-3 '}/>
                </div>
            </div>
            <a className={'flex items-center'} href={"#"}>
                <img src={`${imageSrc}headset.png`} className={'w-6 h-6 ml-3'}/>
                <div className={'text-white font-bold  scale-75 '} style={{fontSize: '12px'}}>
                    <div className={'text-start'}>Hotline
                    </div>
                    <div>0971487037</div>
                </div>
            </a>
            <a className={'flex items-center ml-2'} href={"#"}>
                <img src={`${imageSrc}order.png`} className={'w-8 h-8 '}/>
                <div className={'text-white font-bold scale-75 '} style={{fontSize: '12px'}}>
                    <div className={'text-start max-w-14'}>Tra cứu đơn hàng
                    </div>
                </div>
            </a>

            <a className={'flex items-center ml-2'} href={"#"}>
                <img src={`${imageSrc}shopping-cart.png`} className={'w-8 h-8 '}/>
                <div className={'text-white font-bold scale-75 '} style={{fontSize: '12px'}}>
                    <div className={'text-start max-w-14'}> Giỏ hàng
                    </div>
                </div>
            </a>

            <HoverCard closeDelay={1} openDelay={1}>
                <HoverCardTrigger>
                    <div className={'flex items-center rounded bg-gray-500 cursor-pointer ml-3  row py-0.5'}
                         style={{
                             backgroundColor: '#BE1529',
                             width: '105px', height: '42px'
                         }}>
                        <img src={`${imageSrc}user.png`} className={'w-4 h-4 ml-2 ' }/>
                        <div className={'font-bold text-sm scale-110 text-white w-8/12 '}
                             style={{font: '10px', fontSize: '9px'}}>
                            <div >Xin chào</div>
                            <div >Nguyễn Trường</div>
                        </div>
                    </div>
                </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
                </HoverCardContent>
            </HoverCard>
        </div>
    );

};