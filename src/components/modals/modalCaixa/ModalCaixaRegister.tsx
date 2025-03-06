import React from 'react';
import Modal from 'react-modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import './ModalCaixaRegister.css'


Modal.setAppElement('#root');

interface IFormInputs {
    date: number,
    nameClient: string,
    service: string,
    price: number,
    paymontMethod: string
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#242424'
    },
};


export const ModalCaixaRegister: React.FC = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm<IFormInputs>();
    const [entries, setEntries] = React.useState<{ date: number; nameClient: string; service: string; price: number; paymontMethod: string }[]>([]);
    const [cashOuts, setCashOuts] = React.useState<{ date: number; nameClient: string; service: string; price: number; paymontMethod: string }[]>([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalCashOutIsOpen, setCashOutIsOpen] = React.useState(false);

    const onSubmitCashOut: SubmitHandler<IFormInputs> = (data) => {
        setCashOuts(prevCashOuts => [...prevCashOuts, data]);
    };

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        setEntries(prevEntries => [...prevEntries, data]);
    };

    function openModalCashOut() {
        setCashOutIsOpen(true);
    }

    function closeModalCashOut() {
        setCashOutIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className="menuBar">
                <button className='btnOpenEntrieRegister' onClick={openModal}>Entrada</button>
                <button className='btnOpenCashOutRegister' onClick={openModalCashOut}>Saida</button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel='Example Modal'
                >
                    <button className='closeModal' onClick={closeModal}>X</button>
                    <h2>Cadastrando nova Entrada✅</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label>Data:</label>
                        <input type='date' {...register('date', { required: true })} />
                        {errors.date && <p className='errorRequired'>*Data obrigatória*</p>}

                        <label>Nome:</label>
                        <input type='text' {...register('nameClient', { required: true })} placeholder='Nome do cliente' />
                        {errors.nameClient && <p className='errorRequired'>*Nome do cliente obrigatório*</p>}


                        <label>Serviço:</label>
                        <input type='text' {...register('service', { required: true })} placeholder='Exemplo: Conserto, ajuste, confecção sob medida' />
                        {errors.service && <p className='errorRequired'>*serviço obrigatório*</p>}

                        <label>Preço:</label>
                        <input type='number' {...register('price', { required: true })} />
                        {errors.price && <p className='errorRequired'>*Preço do serviço obrigatório*</p>}

                        <label>Forma de pagamento:</label>
                        <input type='text' {...register('paymontMethod', { required: true })} placeholder='Pix, dinheiro,cartão de crédito' />
                        {errors.paymontMethod && <p className='errorRequired'>*Nome do cliente obrigatório*</p>}

                        <button type='submit'>Cadastrar</button>
                    </form>
                </Modal>

                <Modal
                    isOpen={modalCashOutIsOpen}
                    onRequestClose={closeModalCashOut}
                    style={customStyles}
                    contentLabel='Example Modal'
                >
                    <button className='closeModal' onClick={closeModalCashOut}>X</button>
                    <h2>Cadastrando nova Saida❌</h2>
                    <form onSubmit={handleSubmit(onSubmitCashOut)}>

                        <label>Data:</label>
                        <input type='date' {...register('date', { required: true })} />
                        {errors.date && <p className='errorRequired'>*Data obrigatória*</p>}

                        <label>Nome:</label>
                        <input type='text' {...register('nameClient', { required: true })} placeholder='Nome do cliente' />
                        {errors.nameClient && <p className='errorRequired'>*Nome do cliente obrigatório*</p>}


                        <label>Serviço:</label>
                        <input type='text' {...register('service', { required: true })} placeholder='Exemplo: Conserto, ajuste, confecção sob medida' />
                        {errors.service && <p className='errorRequired'>*serviço obrigatório*</p>}

                        <label>Preço:</label>
                        <input type='number' {...register('price', { required: true })} />
                        {errors.price && <p className='errorRequired'>*Preço do serviço obrigatório*</p>}

                        <label>Forma de pagamento:</label>
                        <input type='text' {...register('paymontMethod', { required: true })} placeholder='Pix, dinheiro,cartão de crédito' />
                        {errors.paymontMethod && <p className='errorRequired'>*Nome do cliente obrigatório*</p>}

                        <button type='submit'>Cadastrar</button>
                    </form>
                </Modal>
                <div>
                    <ul>Entradas
                        {entries.map((entrie, index) => (
                            <li className='entrieList' key={index}>
                                <p className='cashInItens'>Data: {entrie.date}</p>
                                <p className='cashInItens'>Cliente: {entrie.nameClient}</p>
                                <p className='cashInItens'>Serviço: {entrie.service}</p>
                                <p className='cashInItens'>Preço: R${entrie.price}</p>
                                <p className='cashInItens'>Forma de pagamento: {entrie.paymontMethod}</p>
                            </li>
                        ))}
                    </ul>
                    <ul>Saídas
                        {cashOuts.map((cashOut, index) => (
                            <li className='cashOutList' key={index}>
                                <p className='cashOutItens'>Data: {cashOut.date}</p>
                                <p className='cashOutItens'>Cliente: {cashOut.nameClient}</p>
                                <p className='cashOutItens'>Serviço: {cashOut.service}</p>
                                <p className='cashOutItens'>Preço: R${cashOut.price}</p>
                                <p className='cashOutItens'>Forma de pagamento: {cashOut.paymontMethod}</p>
                            </li>
                        ))}
                    </ul>


                </div>
            </div>
        </>
    )
}