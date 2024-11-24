export default function GamingChair() {
    return (
        <div>
            <div className={'flex laptop '} style={{width: '980px', height: '50%'}}>
                <div className={'p-4  font-bold text-red-600 text-left '}>
                    <div>
                        Thương hiệu ghế gaming
                        <ul className={'text-left  flex-col'}>
                            <li>
                                <a className={''} href={''}>Warrior</a>
                            </li>
                            <li>
                                <a className={''} href={''}>E-DRA</a>
                            </li>
                            <li>
                                <a className={''} href={''}>Corsair</a>
                            </li>
                            <li>
                                <a className={''} href={''}>DXRacer</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'p-4 font-bold text-red-600 text-left'}>
                    <div>
                        Giá tiền
                        <ul className={'text-left  flex-col'}>
                            <li>
                                <a className={''} href={''}>Dưới 5 triệu</a>
                            </li>
                            <li>
                                <a className={''} href={''}>5 - 10 triệu</a>
                            </li>
                            <li>
                                <a className={''} href={''}>Trên 10 triệu</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    )
};