import Link from 'next/link';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar-logo">
                <h1>European Football League</h1>
            </div>
            <div className="navbar-menu">
                <Link href="/">
                    <a>Accueil</a>
                </Link>
                <Link href="/teams">
                    <a>Equipes</a>
                </Link>
                <Link href="/scores">
                    <a>Résultats</a>
                </Link>
                <Link href="/admin">
                    <a>Admin</a>
                </Link>
            </div>
        </div>
     );
}
 
export default Navbar;