import React from 'react';
import { ModalCaixaRegister } from '../../modals/modalCaixa/ModalCaixaRegister';
import './Home.css'
import { Menu } from '../../menu/Menu';

const Home: React.FC = () => {
    return (
        <div className='containerPrincipal'>
            <div className='menuBar'>
                <h1>Menu</h1>
                <Menu />
            </div>
            <div className='containerCaixa'>
                <h1>CAIXA</h1>
                <ModalCaixaRegister />
            </div>
        </div>

    );
};

export { Home };