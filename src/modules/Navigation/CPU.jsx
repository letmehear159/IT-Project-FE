export default function CPU() {
    return (
        <div>
            <div className={'flex laptop '} style={{width: '980px', height: '50%'}}>
                <div className={'p-4  font-bold text-red-600 text-left '}>
                    <div>
                        CPU - Bộ vi xử lý Intel
                        <ul className={'text-left  flex-col'} style={{width:'240px'}}>
                            <li style={{width:'240px'}}>
                                <a className={''} href={''}>CPU Itel Core Ultra Series 2</a>
                            </li>
                            <li>
                                <a className={''} href={''}>CPU Intel 9</a>
                            </li>
                            <li>
                                <a className={''} href={''}>CPU Intel 7</a>
                            </li>
                            <li>
                                <a className={''} href={''}>CPU Intel 5</a>
                            </li>
                            <li>
                                <a className={''} href={''}>CPU Intel 3</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className={'p-4 font-bold text-red-600 text-left'}>
                    <div>
                        CPU - Bộ vi xử lý AMD
                        <ul className={'text-left  flex-col'}>
                            <li>
                                <a className={''} href={''}>CPU AMD Athlon</a>
                            </li>
                            <li>
                                <a className={''} href={''}>CPU AMD R3</a>
                            </li>
                            <li>
                                <a className={''} href={''}>CPU AMD R5</a>
                            </li>
                            <li>
                                <a className={''} href={''}>CPU AMD R7</a>
                            </li>
                            <li>
                                <a className={''} href={''}>CPU AMD R9</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
};