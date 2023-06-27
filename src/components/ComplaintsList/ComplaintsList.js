import './ComplaintsList.css'
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';

// const ComplaintsList = ({complaints}) => {
const ComplaintsList = () => {
    
    const {complaints} = useFetch('http://localhost:8000/complaintsList')

    return (      
            <div className="complaintsContainer">
                <h1>Lista de Quejas</h1>
                
                {complaints && complaints.map((complaint) => (
                    <div className="complaintSnippet" key={complaint.id}>
                        <Link to={`/quejas/${complaint.id}`}>                     
                            <h2>"{complaint.title}"</h2>
                            <h3>Empresa: {complaint.company}</h3>
                            <h3>Curso: {complaint.course}</h3>
                            <p>{complaint.body.length > 200 ? `${complaint.body.substring(0,200)}...` : complaint.body}</p>   
                        </Link>
                    </div>
                ))}   
                      
            </div>      
     );
}
 
export default ComplaintsList;

