import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const {colaboradores,eliminarColaborador,actualizarColor,like} = props;
    const {colorPrimario,titulo,id} = props.datos;
    const obj = {
        backgroundColor :  hexToRgba(colorPrimario,0.6)
    }
    const colorP = {
        borderColor :  colorPrimario
    }
    return <> 
        {colaboradores.length > 0  && 
            <section className="equipo" style= {obj}>
                <input
                    className="input-color"
                    type="color"
                    value={colorPrimario}
                    onChange={(e)=>{
                        actualizarColor(e.target.value,id)
                    }}  
                />
                <h3 style={colorP}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            like={like}
                            eliminarColaborador={eliminarColaborador}
                            colorPrimario={colorPrimario} 
                        />)
                    }
                </div>
            </section>
        }
    </>
}
export default Equipo;