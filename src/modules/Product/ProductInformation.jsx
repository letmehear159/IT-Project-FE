import {imageSrc} from "@/constants/index.ts";

export default function ProductInformation() {
    return (
        <div className={' text-left bg-white p-4'} style={{borderRadius: '5px'}}>
            <div className={'font-bold text-3xl text-gray-700'}>Thông tin sản phẩm</div>
            <div className={'text-xl font-bold mt-8'}>Sự Cân Bằng Hoàn Hảo Giữa Phong Cách và Chức Năng</div>
            <div className={''} style={{fontSize: '20px'}}>Khám phá Bàn Phím Cơ MK75, được thiết kế dành cho cả người
                dùng văn phòng và game thủ với bố cục 75%
                linh hoạt, nâng cao năng suất làm việc và trải nghiệm chơi game. Nút điều chỉnh âm lượng tích hợp mang
                đến sự tiện lợi, cho phép bạn điều chỉnh âm thanh dễ dàng. Với thanh đèn nền RGB hai bên và đèn nền RGB
                sống động, bàn phím này thêm một nét tinh tế cho thiết lập của bạn, biến mỗi lần nhấn phím thành một
                trải nghiệm sống động. Dù là để làm việc hay chơi game, MK75 là người bạn đồng hành hoàn hảo của bạn.
            </div>
            <p className={'flex justify-center my-4'}>
                <img src={`${imageSrc}keyboard-seventh.webp`}/>
            </p>
        </div>
    );
};