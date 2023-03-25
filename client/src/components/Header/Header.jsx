import Nav from "./Nav/Nav"
import logo from "./logo.jpg"

const Header = () => {
    return (
        <>
            <div className="h-8 flex justify-between items-center bg-neutral-700 px-4">
                <div className="font-semibold text-sm text-white">Chào mừng bạn đến với GIA BẢO FORKLIFT!</div>
                <pre className="font-semibold text-sm text-white">Hotline: 0987013286  -  Email: giabaoforklift@gmail.com</pre>
            </div>
            <div className="flex mx-4 my-2 justify-between items-center">
                <img className="h-16" src={logo} alt="logo forklift"/>
                <Nav />
                <div className="h-16">
                    <button class="bg-blue-900 hover:bg-blue-700 text-xs text-white font-bold py-1 px-2 rounded mr-1">ĐĂNG KÝ</button>
                    <button class="bg-blue-900 hover:bg-blue-700 text-xs text-white font-bold py-1 px-2 rounded">ĐĂNG NHẬP</button>
                </div>
            </div>
        </>
    )
}

export default Header
