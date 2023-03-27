import { FaPhoneAlt, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="w-full bg-gray-600">
            <div className="w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-b py-3">
                <div className="flex col-span-1 text-white justify-center">
                    <div className='mr-2'><FaPhoneAlt className='text-xl'/></div>
                    <div>
                        <div className='text-sm'>Telephone, Zalo</div>
                        <a href='tel:0987013286' className='hover:text-rose-400'>0987013286</a>
                    </div>
                </div>
                <div className="hidden md:flex col-span-1 text-white justify-center">
                    <div className='mr-2'><FaFacebook className='text-xl'/></div>
                    <div>
                        <div className='text-sm'>Facebook</div>
                        <a href='https://www.facebook.com/hai.bui.7771' className='hover:text-rose-400'>Hoàng Hải Forklift XN</a>
                    </div>
                </div>
                <div className="col-span-1 text-white justify-center hidden xl:flex">
                    <div className='mr-2'><FaInstagram className='text-xl'/></div>
                    <div>
                        <div className='text-sm'>Instagram</div>
                        <a href='https://www.instagram.com/' className='hover:text-rose-400'>Hoàng Hải Forklift XN</a>
                    </div>
                </div>
                <div className="flex col-span-1 text-white justify-center">
                    <div className='mr-2'><FaEnvelope className='text-xl'/></div>
                    <div>
                        <div className='text-sm'>Mail</div>
                        <a href='mailto:giabaoforklift@gmail.com' className='hover:text-rose-400'>giabaoforklift@gmail.com</a>
                    </div>
                </div>
                <div className="hidden lg:flex col-span-1 text-white justify-center">
                    <div className='mr-2'><FaPhoneAlt className='text-xl'/></div>
                    <div>
                        <div className='text-sm'>Chăm sóc khách hàng</div>
                        <a href='tel:0987013286' className='hover:text-rose-400'>0987013286</a>
                    </div>
                </div>
                </div>
            <div className="w-4/5 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 pb-3">
                <div className="col-span-1 mr-5">
                    <div className='text-white font-semibold'>CÔNG TY TNHH GIA BẢO FORKLIFT</div>
                    <div className='text-white'>Địa chỉ: Số 12/16A, khu phố Thống Nhất, Phường Dĩ An, Thành phố Dĩ An, Tỉnh Bình Dương</div>
                    <br />
                    <div className='text-white font-semibold'>LIÊN HỆ</div>
                    <div className='text-white'>Telephone, Zalo: <a href='tel:0987013286' className='hover:text-rose-400'>0987013286</a></div>
                    <div className='text-white'>Facebook: <a href='https://www.facebook.com/hai.bui.7771' className='hover:text-rose-400'>Hoàng Hải Forklift XN</a></div>
                    <div className='text-white'>Instagram: <a href='https://www.instagram.com/' className='hover:text-rose-400'>Hoàng Hải Forklift XN</a></div>
                    <div className='text-white'>Mail: <a href='mailto:giabaoforklift@gmail.com' className='hover:text-rose-400'>giabaoforklift@gmail.com</a></div>
                    <div className='text-white'>Chăm sóc khách hàng: <a href='tel:0987013286' className='hover:text-rose-400'>0987013286</a></div>
                    <br />
                </div>
                <div className="col-span-1 mr-5">
                    <div className='text-white font-semibold'>DANH MỤC</div>
                    <div className='text-white'>Xe nâng mới</div>
                    <div className='text-white'>Xe nâng cũ</div>
                    <div className='text-white'>Phụ tùng chính hãng</div>
                    <div className='text-white'>Lốp xe nâng</div>
                    <br />
                </div>
                <div className="col-span-1 mr-5">
                    <div className='text-white font-semibold'>HƯỚNG DẪN</div>
                    <div className='text-white'>Hướng dẫn mua hàng</div>
                    <div className='text-white'>Hướng dẫn thanh toán</div>
                    <div className='text-white'>Hướng dẫn giao nhận</div>
                    <br />
                </div>
                <div className="col-span-1 lg:col-span-2 xl:col-span-1">
                    <div className='text-white font-semibold mb-2'>CHỈ ĐƯỜNG</div>
                    <div>
                        <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.126195588473!2d106.74732581433749!3d10.878005160286175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8748c2738af%3A0x2a493f6453c95cce!2zMTIgS2h1IFBo4buRIE5o4buLIMSQ4buTbmcsIETEqSBBbiwgQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1679823309568!5m2!1svi!2s" width="100%" height="250" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iFrame>
                    </div>
                </div>
            </div>
            <div className='text-white text-xs text-center pt-6 pb-1'>&copy; Bản quyền thuộc về Gia Bảo Forklift | Xây dựng bởi Bùi Thức Nam</div>
        </div>
    )
}

export default Footer 
