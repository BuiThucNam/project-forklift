import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <NavLink to="/" className='nav flex py-4 lg:ml-4 px-4 hover:bg-slate-100'>Trang chủ</NavLink>
            <NavLink to="/gia-bao-forklift" className='nav flex py-4 px-4 hover:bg-slate-100'>Giới thiệu</NavLink>
            <NavLink to="/san-pham" className='nav flex py-4 px-4 hover:bg-slate-100'>Sản phẩm</NavLink>
            <NavLink to="/cho-thue-xe-nang" className='nav flex py-4 px-4 hover:bg-slate-100'>Cho thuê xe nâng</NavLink>
            <NavLink to="/sua-chua-xe-nang" className='nav flex py-4 px-4 hover:bg-slate-100'>Sửa chữa xe nâng</NavLink>
            <NavLink to="/phu-tung" className='nav flex py-4 px-4 hover:bg-slate-100'>Phụ tùng</NavLink>
            <NavLink to="/dich-vu" className='nav flex py-4 px-4 hover:bg-slate-100'>Dịch vụ</NavLink>
            <NavLink to="/tin-tuc" className='nav flex py-4 px-4 hover:bg-slate-100'>Tin tức</NavLink>
            <NavLink to="/lien-he" className='nav flex py-4 px-4 mr-4 hover:bg-slate-100'>Liên hệ</NavLink>
        </>
    )
}

export default Nav
