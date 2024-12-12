import '../module_css/footer.css'
import {imageSrc} from "@/constants/index.ts";

export default function Footer() {
    return (
        <div className={'bg-white px-4 py-5'}>

            <div className={' mt-4 flex  justify-between border-b-2'}>
                <div className={''}>
                    <div className={'font-bold py-4'}>VỀ NHÓM CHÚNG TÔI</div>
                    <div className={'text-left'}>Giới thiệu thành viên</div>
                </div>
                <div className={'text-left section'}>
                    <div className={'font-bold py-4 '}>CHÍNH SÁCH</div>
                    <div>Chính sách bảo hành</div>
                    <div>Chính sách giao hàng</div>
                    <div>Chính sách bảo mật</div>
                </div>
                <div className={'text-left section'}>
                    <div className={'font-bold py-4 '}>THÔNG TIN</div>
                    <div>Hệ thống cửa hàng</div>
                    <div>Hướng dẫn mua hàng</div>
                    <div>Hướng dẫn thanh toán</div>
                    <div>Hướng dẫn trả góp</div>
                    <div>Tra cứu địa chỉ bảo hành</div>
                </div>

                <div className={'text-left section'}>
                    <div className={'font-bold py-4 '}>TỔNG ĐÀI HỖ TRỢ</div>
                    <div>Mua hàng: <span>1900.5301</span></div>
                    <div>Bảo hành: <span>1900.5325</span></div>
                    <div>Khiếu nại: <span>1800.6173</span></div>
                    <div>Email: <span>nguyentruongpro19@gmail.com</span></div>
                </div>
            </div>
            <div className={'flex mt-4 bg-white items-centers'}>
                <div className={'font-bold flex items-center mr-4'}>
                    Kết nối với chúng tôi
                </div>
                <img src={`${imageSrc}facebook.png`} className={'w-8 h-8 mr-3'}/>
                <img src={`${imageSrc}tiktok.png`} className={'w-8 h-8 mr-3'}/>
                <img src={`${imageSrc}youtube.png`} className={'w-8 h-8 mr-3'}/>
                <img src={`${imageSrc}OIP.jpg`} className={'w-10 h-8 mr-3'}/>
            </div>
        </div>

    );
};