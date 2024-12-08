import {imageSrc} from "@/constants/index.ts";
import {useEffect, useRef, useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/common/dialog/dialog.jsx"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Outlet} from "react-router-dom";
import {userApis} from "@/apis/userApis.js";

export default function LayoutHeader() {

    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [username, setUsername] = useState(null);
    const [user, setUser] = useState(null);
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
    if (localStorage.getItem('username') !== null && username === null) {
        setUsername(`${localStorage.getItem('username')}`);
    }

    const login = async () => {
        const resultLogin = await userApis.login(loginUsername, loginPassword);
        if (resultLogin === true) {
            const userLogged = await userApis.getUserByUsername(loginUsername);
            setUser(userLogged);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className={`flex mb-4 py-5 rounded `} style={{backgroundColor: '#FF0000'}}>
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
                    <div className={'font-bold  text-sm scale-90 text-white w-8/12 '} style={{font: '10px'}}>Danh mục
                    </div>
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
                    <img src={`${imageSrc}order.png`} className={'w-7 h-7 '}/>
                    <div className={'text-white font-bold scale-75 '} style={{fontSize: '12px'}}>
                        <div className={'text-start max-w-14'}>Tra cứu đơn hàng
                        </div>
                    </div>
                </a>

                <a className={'flex items-center ml-2'} href={"#"}>
                    <img src={`${imageSrc}shopping-cart.png`} className={'w-6 h-6 '}/>
                    <div className={'text-white font-bold scale-75 '} style={{fontSize: '12px'}}>
                        <a className={'text-start max-w-14 text-white'}
                           href={username === null ? '' : `cart/2`}> Giỏ hàng
                        </a>
                    </div>
                </a>
                <Popover>
                    <PopoverTrigger
                        className={'flex items-center rounded bg-gray-500 cursor-pointer ml-6  row py-0.5'}
                        style={{
                            backgroundColor: '#BE1529',
                            height: '42px'
                        }}>
                        <img src={`${imageSrc}user.png`} className={'w-4 h-4 mr-2'}/>
                        {
                            localStorage.getItem('username') === null ? (
                                <div className={'font-bold text-sm text-white'}>
                                    <div>Đăng nhập</div>
                                </div>
                            ) : (
                                <div className={'font-bold text-sm text-white'} style={{fontSize: '9px'}}>
                                    <div>Xin chào</div>
                                    <div>{localStorage.getItem('username')}</div>
                                </div>
                            )
                        }
                    </PopoverTrigger>
                    <PopoverContent side={'top'} style={{width: '350px'}}>
                        {
                            username === null ? (
                                <div className={'p-2'}>
                                    <div className={'flex'}>
                                        <img src={`${imageSrc}/hello.png`} className={'w-4 h-4 mr-3'}/>
                                        <span>Xin chào, vui lòng đăng nhập</span>
                                    </div>
                                    <div className={'flex justify-center mt-4'}>
                                        <Dialog>
                                            <DialogTrigger
                                                className={' mr-1 border-0 text-white rounded flex items-center justify-center'}
                                                style={{
                                                    height: '30px', width: '140px'
                                                }}>
                                                <span style={{width: '100%'}}>Đăng nhập</span>
                                            </DialogTrigger>
                                            <DialogContent className={'px-1'}>
                                                <div className={'px-3 bg-white'} style={{width: '500px'}}>
                                                    <div className={'text-gray-700 font-bold pb-3 border-b-2'}>ĐĂNG NHẬP
                                                    </div>
                                                    <form className={'mt-3 grid grid-cols-12'}
                                                          onSubmit={(e) => {
                                                              e.preventDefault();
                                                              login();
                                                          }}>
                                                        <input type={'text'}
                                                               className={'col-span-12 bg-white border-2 rounded h-10 px-4'}
                                                               name={'username'}
                                                               style={{border: '1px solid gray'}}
                                                               id={'username'}
                                                               value={loginUsername}
                                                               onChange={e => setLoginUsername(e.target.value)}
                                                               placeholder={'Username'}></input>
                                                        <input type={'password'}
                                                               className={'col-span-12 mt-6 bg-white border-2 rounded h-10 px-4'}
                                                               name={'password'}
                                                               id={'password'}
                                                               value={loginPassword}
                                                               onChange={e => setLoginPassword(e.target.value)}
                                                               style={{border: '1px solid gray'}}
                                                               placeholder={'Mật khẩu'}></input>
                                                        <button
                                                            className={'bg-red-600 mt-6 text-white font-bold col-span-12 mb-6 rounded'}
                                                        >
                                                            ĐĂNG NHẬP
                                                        </button>
                                                    </form>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                        <Dialog>
                                            <DialogTrigger
                                                className={' bg-white ml-1 text-black rounded flex items-center justify-center'}
                                                style={{
                                                    border: '1px solid black',
                                                    height: '30px', width: '140px'
                                                }}><span>Đăng ký</span></DialogTrigger>
                                            <DialogContent className={'px-1'}>
                                                <div className={'px-6 bg-white'} style={{width: '500px'}}>
                                                    <div className={'text-gray-700 font-bold pb-3 border-b-2'}>ĐĂNG KÝ
                                                    </div>
                                                    <form className={'mt-3 grid grid-cols-12'}>
                                                        <input type={'text'}
                                                               className={'col-span-12 bg-white border-2 rounded h-10 px-4'}
                                                               name={'username'}
                                                               style={{border: '1px solid gray'}}
                                                               placeholder={'Username'}></input>
                                                        <input type={'text'}
                                                               className={'col-span-12 mt-6 bg-white border-2 rounded h-10 px-4'}
                                                               name={'email'}
                                                               style={{border: '1px solid gray'}}
                                                               placeholder={'Email'}></input>
                                                        <input type={'password'}
                                                               className={'col-span-12 mt-6 bg-white border-2 rounded h-10 px-4'}
                                                               name={'password'}
                                                               style={{border: '1px solid gray'}}
                                                               placeholder={'Mật khẩu'}></input>
                                                        <button
                                                            className={'bg-red-600 mt-6 text-white font-bold col-span-12 mb-6 rounded'}>Tạo
                                                            tài khoản
                                                        </button>
                                                    </form>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>

                                </div>
                            ) : (
                                <div className={'p-2'}>
                                    <div className={'flex'}>
                                        <img src={`${imageSrc}/hello.png`} className={'w-4 h-4 mr-3'}/>
                                        <span>Xin chào, {username}</span>
                                    </div>
                                    <div className={'flex items-center mt-3'}>
                                        <img src={`${imageSrc}/to-do-list.png`} className={'w-4 h-4 mr-3'}/>
                                        <a className={'text-black hover:text-red-600'} href={'#'}>
                                            Đơn hàng của tôi
                                        </a>
                                    </div>
                                    <div className={'flex items-center mt-3'}>
                                        <img src={`${imageSrc}/logout.png`} className={'w-4 h-4 mr-3'}/>
                                        <a className={'text-black hover:text-red-600'} href={'#'}>
                                            Đăng xuất
                                        </a>
                                    </div>

                                </div>
                            )
                        }

                    </PopoverContent>
                </Popover>
            </div>
            <Outlet/>
        </div>

    );

};