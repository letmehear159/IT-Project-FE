import {imageSrc} from "@/constants/index.ts";
import '@/modules/module_css/navigation.css'
import * as Tooltip from "@radix-ui/react-tooltip";

import {useState} from "react";


export default function GearNavigation({linkHref, imgBlack, imgWhite, title, marginTop, children}) {
    const [isHovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    }
    const handleMouseLeave = () => {
        setHovered(false);
    }
    return (
        <div className={''}>
            <Tooltip.Provider>
                <Tooltip.Root defaultOpen={true} delayDuration={0}>
                    <div className={'grid grid-cols-12'}>
                        <Tooltip.Trigger asChild className={' bg-white rounded'} style={{width:'250px'}}>
                            <div onMouseEnter={handleMouseEnter}
                                 onMouseLeave={handleMouseLeave}>
                                <a className={`flex navi relative  group p-2 px-3  ${isHovered ? 'bg-red-500' : ''}`}
                                   href={linkHref}>
                                    <img src={`${imageSrc}${isHovered ? imgWhite : imgBlack}.png`} className={'w-6'}
                                         alt={title}/>
                                    <div
                                        className={`ml-1.5 text-black font-normal  ${isHovered ? 'text-white' : ''}`}>{title}</div>
                                    <img src={`${imageSrc}${isHovered ? 'right-arrow-white' : 'right-arrow-black'}.png`}
                                         className='ml-auto mr-3 w-3 h-3 mt-1.5' alt={title}/>
                                    {isHovered && (
                                        <img
                                            src={`${imageSrc}play.png`}
                                            className='w-10 h-10 absolute -right-9 -right-small-navi top-0 z-20'
                                        />
                                    )}
                                </a>
                            </div>
                        </Tooltip.Trigger>
                        <Tooltip.Content side={'right'} align={'start'} className="TooltipContent "
                                         style={{width: '1020px',}} sideOffset={5}>
                            <div className={`bg-white rounded`} style={{marginTop: `${marginTop}`, height: '505px'}}>
                                {children}
                            </div>
                        </Tooltip.Content>
                    </div>
                </Tooltip.Root>
            </Tooltip.Provider>

        </div>


    );

}