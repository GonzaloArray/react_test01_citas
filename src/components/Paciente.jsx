
export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {mascota, propietario, email, date, sintomas, id} = paciente;
    const handleEliminar = () =>{
        const respuesta = confirm('Deseas eliminar este paciente');

        if (respuesta) {
            eliminarPaciente(id);
        }
    }
    return (

        <div className="mx-3 bg-white shadow-md mb-10 px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
                <span className="font-normal normal-case"> {mascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
                <span className="font-normal normal-case"> {propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email:
                <span className="font-normal normal-case"> {email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta:
                <span className="font-normal normal-case"> {date}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:
                <span className="font-normal normal-case"> {sintomas}</span>
            </p>

            <div>
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg mb-2" 
                    type="button"
                    onClick={()=> setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    type="button"
                    onClick={handleEliminar}

                >
                    Eliminar
                </button>
            </div>
        </div>

    )
}
