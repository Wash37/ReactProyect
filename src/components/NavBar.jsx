import Title from "./Title"

function NavBar () {
    return (
        <nav>
        <Title />
        <ul className='links'>
          
          <li><a id='inicioButton' href="">Inicio</a></li>
          <li><a id='carritoButton' href="">Carrito</a></li>
          <li><a id='contactoButton' href="">Contactanos</a></li>
        </ul>
        </nav>
    )
}

export default NavBar;