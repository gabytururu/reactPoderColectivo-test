import './AddComplaint.css'
import {useState} from 'react'

// const AddComplaint = ({handleSubmit}) => {
const AddComplaint = () => {
    const [submit, setSubmit] = useState(false)
    
    const handleSubmit =()=>{
        
        setSubmit(true)
    }

    return (              
        <div className="formContainer">
            <h1>Agrega una nueva Queja</h1>
            {submit&&<div style={{backgroundColor:"red", padding:'15px'}}>Se agregó la queja con éxito</div>}
            <p>Todos los campos son obligatorios</p>
            <p>Te sugerimos incluir la mayor cantidad de detalles posibles y mencionar la empresa en el texto en tantas ocasiones como sea necesario</p>
            <p>Favor de no utilizar lenguaje peyorativo, groserias o frases de odio, pues tendremos que eliminar la publicación</p>
            <form action="submit" className="complaintForm" >
                <label>Name:</label>
                <input type="text"></input>
                <label>Body:</label>
                <textarea>text area</textarea>
            </form>
            {/* lo agrego fuera porque si no se submitea no estoy pudiendo prevenir el default event */}
            <button onClick={()=>{handleSubmit()}}>dame click</button>
            
       
        </div>
     );
}
 
export default AddComplaint;