import logoImage from '../images/logo-portfolio.svg'
const Menu = () => {
  return (
    <>
      <nav id='nav'>
        <div className='nav__wrapper'>
          <a href='/'><img className='nav__logo' src={logoImage} /></a>
          <div>
            <a className='nav__a' href='#about'>Sobre Mi</a>
            <a className='nav__a' href='#proyects'>Proyectos</a>
            <a className='nav__a' href='#contact'>Contacto</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Menu
