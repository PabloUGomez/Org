import "./Campo.css";

const Campo = (props) =>{

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }
    const {type = "text",placeholder,required,label} = props;
    return  <div className={`campo campo-${type}`}>
                <label>{label}</label>
                <input 
                    type={type}
                    placeholder={placeholder} 
                    required={required} 
                    onChange={manejarCambio}/>
            </div>
}
export default Campo;