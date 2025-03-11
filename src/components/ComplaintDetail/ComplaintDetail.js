import './ComplaintDetail.css'
import {useParams} from 'react-router-dom'
import useFetch from '../Hooks/useFetch'

const ComplaintDetail = () => {

    const { id } = useParams()
    const { complaints } = useFetch(`http://localhost:8000/complaintsList/${id}`)

    return ( 
        <div className="complaintDetail">
            <div className="userEvalGraph">
                <img src="../logo192.png" alt="calificaciones"/>
            </div> 
            {complaints &&
                <div className="userComplaint">
                    <h1>Detalles de la Queja #{complaints.id} sobre {complaints.company}</h1>
                    <h2>{complaints.title}</h2>
                    <p>{complaints.body}</p>
                </div>            
            }          
            {/* <OtherComplaints /> */}
        </div>
     );
}
 
export default ComplaintDetail;