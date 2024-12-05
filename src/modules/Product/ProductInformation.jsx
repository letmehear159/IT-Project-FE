import {backEndImageSrc, imageSrc} from "@/constants/index.ts";

export default function ProductInformation({product}) {
    const productImages = product.productImages;
    const detailDescriptions = product.detailDescriptions;

    return (
        <div className={' text-left bg-white p-4'} style={{borderRadius: '5px'}}>
            <div className={'font-bold text-3xl text-gray-700'}>Thông tin sản phẩm</div>
            <div className={'font-bold text-3xl text-black mt-6 mb-2'}>Thông số sản phẩm</div>

            <div className={'grid grid-cols-12'}>
                {
                    product.specifications.map((spec) =>
                        spec.specKey !== 'Refresh Hertz' && spec.specValue !== '' && spec.specValue !== null
                        &&
                        <>
                            <div className={'px-3 col-span-3 outline-2  bg-gray-200 font-bold text-black border-r-0'}>
                                {spec.specKey}
                            </div>

                            <div className={'col-span-9 border py-2 px-2'}>
                                {spec.specValue}
                            </div>
                        </>
                    )
                }
            </div>
            {
                detailDescriptions.sort((a, b) => a.order - b.order).map((detail, i) =>
                    <>
                        <div className={'text-xl font-bold mt-8'}>{detail.title}
                        </div>
                        <div className={''} style={{fontSize: '20px'}}>{detail.detail_content}
                        </div>
                        <p className={'flex justify-center my-4'}>
                            <img src={`${backEndImageSrc + productImages[i].imageUrl}`}/>
                        </p>
                    </>
                )
            }


        </div>
    );
};