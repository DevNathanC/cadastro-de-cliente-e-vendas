import React from 'react';
import Modal from 'react-modal';
import './CadastroClients.css';
import { SubmitHandler, useForm } from 'react-hook-form';

Modal.setAppElement('#root');

interface IFormInputs {
    name: string,
    telefone: number,
    email: string,
    endereco: string
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

const CadastroClient: React.FC = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm<IFormInputs>();
    const [clientes, setClientes] = React.useState<{ name: string; telefone: number; email: string; endereco: string; }[]>([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        setClientes(prevClientes => [...prevClientes, data]);
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button
                onClick={openModal}
            >Cadastrar Novo Cliente</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
            >
                <button className='closeModal' onClick={closeModal}>X</button>
                <h2>Cadastrando novo cliente</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label>Name:</label>
                    <input type='text' {...register('name', { required: true })} placeholder='Exemplo: Maria, José' />
                    {errors.name && <p className='errorRequired'>*Nome obrigatório*</p>}

                    <label>Telefone:</label>
                    <input type='number' {...register('telefone', { required: true })} placeholder='(DDD) 9 1234-5678' />
                    {errors.telefone && <p className='errorRequired'>*Telefone obrigatório*</p>}


                    <label>Email:</label>
                    <input type='email' {...register('email')} placeholder='Exemplo: email@hotmail.com' />

                    <label>Endereço:</label>
                    <input type='text' {...register('endereco')} placeholder='Rua vitoria, Bairro Imperial, número 21' />

                    <button type='submit'>Cadastrar</button>
                </form>
            </Modal>
            <div>
                <ul>
                    {clientes.map((cliente, index) => (
                        <li key={index}>
                            <p>Nome: {cliente.name}</p>
                            <p>Telefone: {cliente.telefone}</p>
                            <p>Email: {cliente.email || " Email não cadastrado ☹❌"}</p>
                            <p>Endereço:{cliente.endereco || "Endereço não cadastrado ☹❌"}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export { CadastroClient };