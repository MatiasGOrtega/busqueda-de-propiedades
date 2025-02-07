import Link from "next/link";

function DesktopMenu() {
  return (
    <nav className="gap-4 hidden laptop:flex">
      <Link className="nav-link" href="/">
        Inicio
      </Link>
      <Link className="nav-link" href="/about">
        Sobre Nosotros
      </Link>
      <Link className="nav-link" href="/contact">
        Contacto
      </Link>
      <Link className="nav-link" href="/agents">
        Agentes
      </Link>
    </nav>
  );
}

export default DesktopMenu;
