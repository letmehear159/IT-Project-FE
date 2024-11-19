import {imageSrc} from "@/constants/index.ts";

const productCatalogFirst = [
    {name: 'Laptop', imgName: 'laptop.webp'}
    , {
        name: 'PC', imgName: 'PC.webp'
    },
    {
        name: 'Màn hình', imgName: 'monitor.webp'
    }
    , {
        name: 'Mainboard', imgName: 'MainBoard.webp'
    }, {
        name: 'CPU', imgName: 'CPU.webp'
    },
    {
        name: 'VGA', imgName: 'VGA.webp'
    },
    {
        name: 'RAM', imgName: 'RAM.webp'
    },
    {
        name: 'Ổ cứng', imgName: 'SSD.webp'
    },
    {
        name: 'CASE', imgName: 'case.webp'
    }
];
const productCatalogSecond = [
    {name:'Nguồn', imgName:'source.webp'},
    {name:'Bàn phím', imgName:'keyboard.webp'},
    {name:'Chuột', imgName:'mouse.jpg'},
    {name:'Tai nghe', imgName:'headphone.webp'},
];
export default function Catalog() {


    return (
        <div>
            <div className={'text-left font-bold text-2xl'}>Danh mục sản phẩm</div>
            <div className={'flex mt-8 border-t-2 '}>
                {
                    productCatalogFirst.map(product => {
                        return (
                            <a className={'flex flex-col p-5 mt-5 items-center'} href={'#'}>
                                <img src={`${imageSrc + product.imgName}`} className={'p-0.5 hover:scale-150'}
                                     style={{width: '84px', height: '84px'}}/>
                                <span
                                    className={'text-black text-xl scale-90 mt-3 hover:text-red-600 '}>{`${product.name}`}</span>
                            </a>
                        )
                    })
                }
            </div>
            <div className={'flex  '}>
                {
                    productCatalogSecond.map(product => {
                        return (
                            <a className={'flex flex-col p-5 mt-5 items-center'} href={'#'}>
                                <img src={`${imageSrc + product.imgName}`} className={'p-0.5 hover:scale-150'}
                                     style={{width: '84px', height: '84px'}}/>
                                <span
                                    className={'text-black text-xl scale-90 mt-3 hover:text-red-600 '}>{`${product.name}`}</span>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
};