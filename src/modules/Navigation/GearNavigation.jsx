import {imageSrc} from "@/constants/index.ts";
import '@/modules/module_css/navigation.css'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {Button} from "@/components/ui/button.jsx";
import {useState} from "react";


export default function GearNavigation({linkHref, imgBlack, imgWhite, title}) {
    const [isHovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    }
    const handleMouseLeave = () => {
        setHovered(false);
    }
    return (
        <div className='relative'
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
            <HoverCard openDelay={5} closeDelay={0}>
                <HoverCardTrigger asChild>
                    <a className={`flex navi relative w-6/12 group my-2 ${isHovered ? 'bg-red-500' : ''}`}
                       href={linkHref}>
                        <img src={`${imageSrc}${isHovered ? imgWhite : imgBlack}.png`} className={'w-6'} alt={title}/>
                        {/*<img src={`${imageSrc}${imgBlack}.png`} className='w-6 group-hover:hidden' alt={title}/>*/}
                        {/*<img src={`${imageSrc}${imgWhite}.png`} className='w-6 hidden group-hover:block' alt={title}/>*/}
                        <div className={`ml-1.5 text-black font-normal  ${isHovered ? 'text-white' : ''}`}>{title}</div>
                        <img src={`${imageSrc}${isHovered ? 'right-arrow-white' : 'right-arrow-black'}.png`}
                             className='ml-auto mr-3 w-3 h-3 mt-1.5' alt={title}/>
                        {isHovered && (
                            <img
                                src={`${imageSrc}play.png`}
                                className='w-8 h-6 absolute -right-small-navi top-0 z-20'
                            />
                        )}
                    </a>
                </HoverCardTrigger>
                <HoverCardContent className={'w-80 absolute top-0 left-full -mt-1 ml-4'}>
                    <div className={`w-10/12`}>This is content</div>
                </HoverCardContent>
            </HoverCard>


        </div>


    );

}