import { useState } from "react";
import "./Formulario.css"
import Campo from '../Campo/Campo';
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] = useState("");
    const [titulo,actualizarTitulo] = useState("");
    const [color,actualizarColor] = useState("");

    const {registrarColaborador,crearEquipo}= props;
    
    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({
            titulo,
            colorPrimario: color,
            })
    }
    return  <section className="formulario">
                <form onSubmit={manejarEnvio} >
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <Campo 
                        label="Nombre" 
                        placeholder="Ingresar nombre" 
                        required valor={nombre} 
                        actualizarValor={actualizarNombre}
                    />
                    <Campo 
                        label="Puesto"
                        placeholder="Ingresar puesto" 
                        required 
                        valor={puesto}
                        actualizarValor={actualizarPuesto}
                    />
                    <Campo 
                        label="Foto" 
                        placeholder="Ingresar enlace de foto" 
                        required 
                        valor={foto}
                        actualizarValor={actualizarFoto}
                    />
                    <ListaOpciones
                        valor={equipo}
                        actualizarValor={actualizarEquipo}
                        equipos={props.equipos}
                    />
                    <Boton texto="Crear"/>
                </form>
                <form onSubmit={manejarNuevoEquipo} >
                    <h2>Rellena el formulario para crear el equipo.</h2>
                    <Campo 
                        label="Titulo" 
                        placeholder="Ingresar titulo" 
                        required 
                        valor={titulo} 
                        actualizarValor={actualizarTitulo}
                    />
                    <Campo 
                        label="Color" 
                        type="color"
                        placeholder="Ingresar el color en hex"  
                        required 
                        valor={color}
                        actualizarValor={actualizarColor}
                    />
                    <Boton texto = "Registrar equipo"/>
                </form>
            </section>
}
export default Formulario;