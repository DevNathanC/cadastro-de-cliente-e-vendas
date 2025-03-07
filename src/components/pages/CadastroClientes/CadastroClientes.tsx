import { Menu } from "../../menu/Menu"
import { ModalClientRegister } from "../../modals/modalClients/ModalClientRegister"
import './CadastroClientes.css'

export const CadastroClientes = () => {
    return (
        <div className="containerPrincipal">
            <div className='menuBar'>
                <h1>Menu</h1>
                <Menu />
            </div>
            <div className='containerCaixa'>
            <h1>Cadastro de Clientes</h1>
                            <ModalClientRegister />
                        </div>
        </div>
    )
}