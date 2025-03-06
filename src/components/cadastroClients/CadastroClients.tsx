import React from 'react';
import Modal from 'react-modal';
import './CadastroClients.css';
import { SubmitHandler, useForm } from 'react-hook-form';

Modal.setAppElement('#root');

interface IFormInputs {
    name: string,
    telefone: string,
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


    const [formData, setFormData] = React.useState({
        name: '',
        telefone: '',
        email: '',
        endereco: ''
    });

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        setFormData({
            name: data.name,
            telefone: data.telefone,
            email: data.email,
            endereco: data.endereco
        })
    };

    // const [clientes, setClientes] = React.useState<{ name: string; telefone: string; email: string; endereco: string; }[]>([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    //     event.preventDefault();
    //     setClientes(prevClientes => [...prevClientes, formData]);
    //     setFormData({
    //         name: '',
    //         telefone: '',
    //         email: '',
    //         endereco: ''
    //     });
    // }


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     const { name, value } = event.target;
    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         [name]: value
    //     }));
    // }


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
                    <input type='tel' {...register('telefone', { required: true })} placeholder='(DDD) 9 1234-5678' />
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
                    {/* {clientes.map((cliente, index) => ( */}
                    <li
                    // key={index}
                    >
                        <p>Nome: {formData.name}</p>
                        <p>Telefone: {formData.telefone}</p>
                        <p>Email: {formData.email || " Email não definido ☹❌"}</p>
                        <p>Endereço:{formData.endereco || "Endereço não definido ☹❌"}</p>
                    </li>
                    {/* ))} */}
                </ul>
            </div>
        </>
    );
};

export { CadastroClient };