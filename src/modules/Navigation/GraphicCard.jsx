export default function GraphicCard() {
    return (
        <div>
            <div className={'flex laptop '} style={{width: '980px', height: '50%'}}>
                <div className={'p-4  font-bold text-red-600 text-left '}>
                    <div>
                        VGA (Trên 12 GB VRAM)
                        <ul className={'text-left  flex-col'}>
                            <li>
                                <a className={''} href={''}>RTX 4070 (12GB)</a>
                            </li>
                            <li>
                                <a className={''} href={''}>RXT 4070Ti (16GB)</a>
                            </li>
                            <li>
                                <a className={''} href={''}>RXT 4080 SUPER (16GB)</a>
                            </li>
                            <li>
                                <a className={''} href={''}>RXT 4090 SUPER (24GB)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'p-4 font-bold text-red-600 text-left'}>
                    <div>
                        VGA (Dưới 12 GB VRAM)
                        <ul className={'text-left  flex-col'}>
                            <li>
                                <a className={''} href={''}>RTX 4060Ti (8-16GB)</a>
                            </li>
                            <li>
                                <a className={''} href={''}>RTX 4060 (8GB)</a>
                            </li>
                            <li>
                                <a className={''} href={''}>RTX 3060 (12GB)</a>
                            </li>
                            <li>
                                <a className={''} href={''}>RTX 3050 (6-8GB)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'p-4 font-bold text-red-600 text-left'}>
                    <div>
                        VGA - Card màn hình
                        <ul className={'text-left  flex-col'}>
                            <li>
                                <a className={''} href={''}>NVIDIA Quadro</a>
                            </li>
                            <li>
                                <a className={''} href={''}>AMD Radeon</a>
                            </li>
                            <li>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
};