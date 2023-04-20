import "./MiOrg.css"

const MiOrg = (props) => {
    return <section className="org-section">
        <h3>Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg