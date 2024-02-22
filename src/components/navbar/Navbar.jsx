import './navbar.css'
import CartWidget from "../cartWidget/CartWidget"
import logo from '../../Images/logo.png'
const Navbar = () =>{
    return(
<nav className='navContainer'>
        <a className='link' href="/">
            <img alt='logo' src={logo} className='logo'/>
        </a>
        <div className='linksContainer'>
        <a className='link' href="/">Nuevos</a>
        <a className='link' href="/">Mas vendidos</a>
        <a className='link' href="/">Ofertas</a>
        </div>
        <CartWidget/>
      </nav>
    )
}

export default Navbar