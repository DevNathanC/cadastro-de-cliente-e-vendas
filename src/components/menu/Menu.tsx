import { Link } from 'react-router'
import './Menu.css'

export const Menu: React.FC = () => {

    return (
        <div className="menu">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/cadastro-clientes">
                <button>cadastro de Clientes</button>
            </Link>

        </div>
    )
}