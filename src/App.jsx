import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPaciente } from "./components/ListadoPaciente"

export const App = () => {
    // Le pasamos un array vacio si no hay nada en el localStorage y si el local storage tiene algo le enviamos el array con la informacion
    const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    const [pacientes, setPacientes] = useState(INITIAL);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes));

    }, [pacientes]);

    const eliminarPaciente = (id) =>{
        const pacientesActualizado = pacientes.filter(paciente => paciente.id !== id);
        setPacientes(pacientesActualizado);
    }

    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />

                <ListadoPaciente
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    )
}
