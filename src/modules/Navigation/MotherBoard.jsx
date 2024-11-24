export default function MotherBoard() {
    return (
        <div>
            <div className={'flex laptop '} style={{width: '980px', height: '50%'}}>
                <div className={'p-4  font-bold text-red-600 text-left '}>
                    <div>
                        Bo mạch chủ Intel
                        <ul className={'text-left  flex-col'}>
                            <li>
                                <a className={''} href={''}>Z890</a>
                            </li>
                            <li>
                                <a className={''} href={''}>Z790</a>
                            </li>
                            <li>
                                <a className={''} href={''}>B760</a>
                            </li>
                            <li>
                                <a className={''} href={''}>H610</a>
                            </li>
                            <li>
                                <a className={''} href={''}>X299X</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className={'p-4 font-bold text-red-600 text-left'}>
                    <div>
                        Bo mạch chủ AMD
                        <ul className={'text-left  flex-col'}>
                            <li>
                                <a className={''} href={''}>AMD X870</a>
                            </li>
                            <li>
                                <a className={''} href={''}>AMD X670</a>
                            </li>
                            <li>
                                <a className={''} href={''}>AMD X570</a>
                            </li>
                            <li>
                                <a className={''} href={''}>AMD B650</a>
                            </li>
                            <li>
                                <a className={''} href={''}>AMD B550</a>
                            </li>
                            <li>
                                <a className={''} href={''}>AMD A320</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
};