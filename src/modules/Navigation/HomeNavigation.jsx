import GearNavigation from "@/modules/Navigation/GearNavigation.jsx";
import Laptop from "@/modules/Navigation/Laptop.jsx";
import LaptopGaming from "@/modules/Navigation/LaptopGaming.jsx"
import '/src/modules/module_css/Laptop.css'
import GraphicCard from "@/modules/Navigation/GraphicCard.jsx";
import MotherBoard from "@/modules/Navigation/MotherBoard.jsx";
import CPU from "@/modules/Navigation/CPU.jsx";
import RamStorage from "@/modules/Navigation/RamStorage.jsx";
import Monitor from "@/modules/Navigation/Monitor.jsx";
import Keyboard from "@/modules/Navigation/Keyboard.jsx";
import Mouse from "@/modules/Navigation/Mouse.jsx";
import Headphone from "@/modules/Navigation/Headphone.jsx";
import GamingChair from "@/modules/Navigation/GamingChair.jsx";
import * as Tooltip from "@radix-ui/react-tooltip";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.jsx";
import {imageSrc} from "@/constants/index.ts";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const items = [
    {
        imgBlack: 'laptop-black',
        imgWhite: 'laptop-white',
        title: 'Laptop',
        linkHref: '#',
        reactComponent: <Laptop/>

    }, {
        imgBlack: 'laptop-gaming-b',
        imgWhite: 'laptop-gaming-w',
        title: 'Laptop Gaming',
        linkHref: '#',
        index: 1,
        reactComponent: <LaptopGaming/>
    }, {
        imgBlack: 'graphic-card',
        imgWhite: 'graphic-card (1)',
        title: 'Graphic Card',
        linkHref: '#',
        index: 2,
        reactComponent: <GraphicCard/>
    }, {
        imgBlack: 'mother-board',
        imgWhite: 'mother-board (1)',
        title: 'Mother Board',
        linkHref: '#',
        index: 3,
        reactComponent: <MotherBoard/>
    }, {
        imgBlack: 'cpu',
        imgWhite: 'cpu (1)',
        title: 'CPU',
        linkHref: '#',
        index: 4,
        reactComponent: <CPU/>

    }, {
        imgBlack: 'hosting',
        imgWhite: 'hosting (1)',
        title: 'Storage, Ram',
        linkHref: '#',
        index: 5,
        reactComponent: <RamStorage/>
    }, {
        imgBlack: 'monitor',
        imgWhite: 'monitor (1)',
        title: 'Màn hình',
        linkHref: '#',
        index: 6,
        reactComponent: <Monitor/>

    }, {
        imgBlack: 'keyboard',
        imgWhite: 'keyboard (1)',
        title: 'Bàn phím',
        linkHref: '#',
        index: 7,
        reactComponent: <Keyboard/>
    }, {
        imgBlack: 'mouse',
        imgWhite: 'mouse (1)',
        title: 'Chuột',
        linkHref: '#',
        index: 8,
        reactComponent: <Mouse/>
    }, {
        imgBlack: 'earphones',
        imgWhite: 'earphones (1)',
        title: 'Tai nghe',
        linkHref: '#',
        index: 9,
        reactComponent: <Headphone/>
    },
    {
        imgBlack: 'gaming-chair',
        imgWhite: 'gaming-chair (1)',
        title: 'Ghế',
        linkHref: '#',
        index: 10,
        reactComponent: <GamingChair/>
    },
];
const saleImagesCarousel=[
    {
        saleImagesSrc:`${imageSrc}SaleImages/banner `
    }
]
export default function HomeNavigation() {
    const marginTopValue = -39.984;
    return (
        <div className={'relative'}>
            <div className={'absolute top-0 '} style={{left: '257px'}}>
                <div
                    style={{width: '1020px'}}>
                    <div className={``} style={{height: '500px'}}>
                        <div className={'grid grid-cols-12 grid-rows-12'}>
                            <div className={'col-span-8  rounded row-span-8'}>
                                <Carousel plugins={[
                                    Autoplay({
                                        delay: 3000,
                                    })
                                ]}>
                                    <CarouselContent>
                                        {
                                            Array.from({length: 9}).map((_, i) => (
                                                <CarouselItem>
                                                    <img src={`${imageSrc}SaleImages/banner ${i + 1}.webp`} style={{width:'900px'}}  />
                                                </CarouselItem>
                                            ))
                                        }
                                    </CarouselContent>
                                    <CarouselPrevious className={'left-1'}/>
                                    <CarouselNext className={'right-1 '}/>
                                </Carousel>
                            </div>
                            <div className={'col-span-4  rounded row-span-4 '}>
                                <img src={`${imageSrc}SaleImages/left banner 1.webp`}/>
                            </div>
                            <div className={'col-span-4 rounded row-span-4 '}>
                                <img src={`${imageSrc}SaleImages/left banner 2.webp`}/>
                            </div>
                            <div className={'col-span-4  row-span-4'}>
                                <div className={'col-span-4 rounded  '}>
                                    <img src={`${imageSrc}SaleImages/bottom banner 1.webp`} style={{width: '350px'}}/>
                                </div>
                            </div>
                            <div className={'col-span-4  row-span-4  rounded'}>
                                <img src={`${imageSrc}SaleImages/bottom banner 2.webp`} style={{width: '350px'}}/>
                            </div>
                            <div className={'col-span-4  row-span-4'}>
                                <div className={'col-span-4  rounded  '}>
                                    <img src={`${imageSrc}SaleImages/bottom banner 3.webp`} style={{width: '350px'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div > {items.map((item, i) => (
                <GearNavigation key={i} imgBlack={item.imgBlack} imgWhite={item.imgWhite} title={item.title}
                                linkHref={item.linkHref} marginTop={`${marginTopValue * (item.index || 0)}px`}>
                    {item.reactComponent}
                </GearNavigation>))} </div>
            <div className={' grid grid-cols-12 mt-20'}>
                <a href={''} className={'col-span-3'}>
                    <img src={`${imageSrc}SaleImages/sale 1.webp`}/>
                </a>
                <a href={''} className={'col-span-3'}>
                    <img src={`${imageSrc}SaleImages/sale 2.webp`}/>
                </a>
                <a href={''} className={'col-span-3'}>
                    <img src={`${imageSrc}SaleImages/sale 3.webp`}/>
                </a>
                <a href={''} className={'col-span-3'}>
                    <img src={`${imageSrc}SaleImages/sale 4.webp`}/>
                </a>

            </div>
        </div>


    );
}