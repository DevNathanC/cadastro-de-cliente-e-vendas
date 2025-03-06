import React from 'react';
import { ModalClientRegister } from '../modals/modalClients/ModalClientRegister';
import { ModalCaixaRegister } from '../modals/modalCaixa/ModalCaixaRegister';
import './Home.css'

const Home: React.FC = () => {
    return (
        <div className='containerPrincipal'>
            <div className='menuBar'>
            <h1>Menu</h1>
            <ModalClientRegister />
            </div>
            <div className='containerCaixa'>
                <h1>CAIXA</h1>
                <ModalCaixaRegister/>
            </div>
        </div>

    );
};

export { Home };