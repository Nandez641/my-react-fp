
import { Outlet } from "react-router-dom"
import logo from '../../assets/logo for my fp.jpg'
import { useState } from "react"
import { List, X } from "lucide-react"

const navs = [
    {id:0, title:'Home', path:'/home'},
    {id:7, title:'Skills', path:'/skill'},
    {id:1, title:'About', path:'/about'},
    {id:2, title:'Contact', path:'/contact'},
    {id:3, title:'Experience', path:'/experience'},
    {id:4, title:'Projects', path:'/projects'},
    {id:5, title:'Services', path:'/services'},
    {id:6, title:'Testimonials', path:'/testimonials'}
]

export default function PublicLayout() {

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <header className="d-flex justify-content-between align-items-center position-relative">

                <img
                    src={logo}
                    alt="Logo"
                    height={200}
                    width={200}
                />

                {/* Desktop Navbar */}
                <ul className="d-none d-md-flex justify-content-around align-items-center flex-grow-1 list-unstyled m-0 p-0">
                    {navs.map((links) => (
                        <li key={links.id}>
                            <a className="text-dark text-decoration-none"
                               href={links.path}>
                                {links.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="d-md-none"
                    onClick={() => setToggle(!toggle)}
                    aria-label={toggle ? "Close menu" : "Open menu"}
                    aria-expanded={toggle}
                >
                    {toggle ? <X /> : <List />}
                </button>

                {/* Mobile Navbar */}
                {toggle && (
                    <ul className="d-md-none d-flex flex-column gap-3 list-unstyled position-absolute top-100 end-0 bg-dark p-3 m-0">

                        {navs.map((links) => (
                            <li key={links.id}>
                                <a
                                    className="text-white text-decoration-none"
                                    href={links.path}
                                    onClick={() => setToggle(false)}
                                >
                                    {links.title}
                                </a>
                            </li>
                        ))}

                    </ul>
                )}

            </header>

            <Outlet />
        </>
    )
}