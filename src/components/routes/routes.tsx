import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "../pages/home/Home"
import { CadastroClientes } from "../pages/CadastroClientes/CadastroClientes"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
              <Route path="cadastro-clientes" element={<CadastroClientes/>}/>
            </Routes>
        </BrowserRouter>
    )
}