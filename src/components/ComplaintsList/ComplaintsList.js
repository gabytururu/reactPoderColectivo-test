import './ComplaintsList.css'
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';
import {useState} from 'react'

// const ComplaintsList = ({complaints}) => {
const ComplaintsList = () => {
    
    const {complaints} = useFetch('http://localhost:8000/complaintsList')
   
    const [category, setCategory] = useState('todas')

    const handleChange = () =>{
        const selectedVal = document.querySelector('select').value
        setCategory(selectedVal)
    }

    return (      
            <div className="complaintsContainer">
                <h1>Lista de Quejas</h1>
                <h2>La categoría actual es {category}</h2>
                <select name="category" onChange={handleChange}>
                    <option value="todas" defaultValue>Todas</option>
                    <option value="aerolineas">Aerolineas</option>
                    <option value="internet">Internet</option>
                </select>    

                {/* //el error se asocia a que en la HOME llamo a este componente y este componente 
                exige un FILTER y el valor de filter no existe en HOME porque no hay un select */}

                {complaints && category && category === 'todas'? 
                    complaints.map((complaint) => (
                        <div className="complaintSnippet" key={complaint.id}>
                            <Link to={`/quejas/${complaint.id}`}>                     
                                <h2>"{complaint.title}"</h2>
                                <h3>Empresa: {complaint.company}</h3>
                                <h3>Curso: {complaint.course}</h3>
                                <p>{complaint.body.length > 200 ? `${complaint.body.substring(0,200)}...` : complaint.body}</p>   
                            </Link>
                        </div>
                    ))                
                :
                    
                    complaints.filter((complaint) => complaint.category === category).map((complaint) => (
                    <div className="complaintSnippet" key={complaint.id}>
                        <Link to={`/quejas/${complaint.id}`}>                     
                            <h2>"{complaint.title}"</h2>
                            <h3>Empresa: {complaint.company}</h3>
                            <h3>Curso: {complaint.course}</h3>
                            <p>{complaint.body.length > 200 ? `${complaint.body.substring(0,200)}...` : complaint.body}</p>   
                        </Link>
                    </div>
                    ))   
                }                         
            </div>      
     );
}
 
export default ComplaintsList;

