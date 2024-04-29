import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
     <img src="img/bank.png" alt="" height={50}></img>
      <nav>
        <a href="">Servicios</a>
        <a href="">Contacto</a>
        <a href="">Acerca de</a>
      </nav>
      <button>
        <Link to="/">Cerrar Sesion</Link>
      </button>
    </header>
  );
};

export default Header;