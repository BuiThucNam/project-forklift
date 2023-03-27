import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Nav from './Nav/Nav'
import logo from './logo.jpg'
import './Header.css'

const Header = () => {
    const [ bars, setBars ] = useState(false)
    return (
        <>
            <div className="h-8 md:flex md:justify-between md:items-center bg-neutral-700 px-4">
                <div className="h-8 flex items-center justify-center font-semibold text-sm text-white">Chào mừng bạn đến với GIA BẢO FORKLIFT!</div>
                <pre className="font-semibold text-sm text-white hidden md:block">Hotline: 0987013286  -  Email: giabaoforklift@gmail.com</pre>
            </div>
            <div className="h-20 flex px-4 py-8 w-full bg-white justify-between items-center sticky top-0">
                <div className='text-2xl items-center lg:hidden hover:cursor-pointer' onClick={() => setBars(!bars)}>{<FaBars />}</div>
                <div className='flex flex-row-reverse md:flex-row'>
                    <NavLink className='md:flex md:items-center' to="/"><img className="w-auto h-16 cursor-pointer" src={logo} alt="logo forklift"/></NavLink>
                    <div className={`${bars ? 'h-screen absolute top-0 left-0 w-2/5 bg-white overflow-y-scroll move' : 'hidden'} lg:flex lg:justify-between`}>
                        <Nav />
                    </div>
                    <div className={`h-screen w-3/5 ${bars ? '' : 'hidden'} bg-stone-600/50 absolute top-0 right-0`} onClick={() => setBars(!bars)}>
                        <button type="Đóng" className='text-5xl absolute top-2 right-2 w-9 h-9 text-slate-300 hover:text-white flex items-center justify-center'>×</button>
                    </div>
                </div>
                <div className="h-16">
                    <NavLink to='/dang-ky' className="btn mr-1 flex xl:inline-flex text-xs w-20 justify-center">ĐĂNG KÝ</NavLink>
                    <NavLink to='/dang-nhap' className="btn text-xs border-b border-blue-700 w-20">ĐĂNG NHẬP</NavLink>
                </div>
            </div>
        </>
    )
}

export default Header
