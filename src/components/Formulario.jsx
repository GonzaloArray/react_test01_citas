import { useEffect, useState } from "react"
import { Error } from "./Error";



export const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [sintomas, setSintomas] = useState('');

    // Use effect para realizar los cambios de state en el componente
    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            const { mascota, propietario, email, date, sintomas } = paciente;
            setMascota(mascota)
            setPropietario(propietario)
            setEmail(email)
            setDate(date)
            setSintomas(sintomas)
        }
    }, [paciente]);


    const mascotaForm = (e) =>{
        setMascota(e.target.value);
    }
    const propietarioForm = (e) =>{
        setPropietario(e.target.value);
    }
    const emailForm = (e) =>{
        setEmail(e.target.value);
    }
    const dataForm = (e) =>{
        setDate(e.target.value);
    }
    const sintomasForm = (e) =>{
        setSintomas(e.target.value);
    }

    const [error, setError] = useState(false);

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if ([mascota, propietario, email, date, sintomas].includes('')) {

            setError(true);
            return;
        }

        setError(false);

        // Creamos un objeto
        const objetoPaciente = {
            mascota,
            propietario,
            email,
            date,
            sintomas,
        }

        if (paciente.id) {
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

            setPacientes(pacientesActualizados);
            // Reseteamos el state a como estaba en el inicio
            setPaciente({});
        }else{
            objetoPaciente.id = generarId();
            // Le paso el array de objetos al app que es el padre del formulario
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Reinicio el form
        setMascota('')
        setPropietario('')
        setEmail('')
        setDate('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:2/5 mx-3">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 mb-10 text-center">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-10 py-5 mb-10">
                {error && <Error mensaje="Todos los campos son obligatorio"/>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascotas</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                        value={mascota}
                        onChange={ mascotaForm}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre de la Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                        value={propietario}
                        onChange={ propietarioForm}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                        value={email}
                        onChange={ emailForm}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                        value={date}
                        onChange={ dataForm}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={ sintomasForm}
                    />
                </div>

                <input className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer" type="submit" value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'} />

            </form>

        </div>
    )
}
