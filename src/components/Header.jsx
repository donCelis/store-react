import logoStore from '../images/logo.svg'
import iconCart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'

import '../styles/header.css'

const Header = () => {
  const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact']
  return (
    <header>
      <div className='container row space-bt'>
        <menu className='row gap-sm'>
          <h1 className='logo-store'>
            <img src={logoStore} alt='La mejor tienda de zapatos' />
          </h1>
          <ul className='row main-menu'>
            {navLinks.map((link, index) => (
              <li key={index}><a href='#'>{link}</a></li>
            ))}
          </ul>
        </menu>
        <nav className='row second-menu'>
          <button className='btn btn-cart'>
            <img src={iconCart} alt='Carrito de compras' />
          </button>
          <button className='btn btn-profile'>
            <img className='img-fluid' src={avatar} alt='Foto de perfil' />
          </button>
        </nav>
      </div>
    </header>
  )
}
export { Header }
