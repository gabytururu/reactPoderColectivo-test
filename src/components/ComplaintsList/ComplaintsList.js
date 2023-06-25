import './ComplaintsList.css'

const ComplaintsList = ({complaints}) => {
    // const list = [
    //     {id:1, title:'aeromexico apesta', company:'coderhouse', course:'aws Cloud Computing', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic, a accusantium ducimus dolores neque error blanditiis sequi optio saepe iste, doloremque quibusdam commodi in quidem doloribus odit. Similique, eius'},
    //     {id:2, title:'aeromexico apesta', company:'coderhouse', course:'desarrollo web', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic, a accusantium ducimus dolores neque error blanditiis sequi optio saepe iste, doloremque quibusdam commodi in quidem doloribus odit. Similique, eius'},
    //     {id:3, title:'aeromexico apesta', company:'coderhouse',course:'react js', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic, a accusantium ducimus dolores neque error blanditiis sequi optio saepe iste, doloremque quibusdam commodi in quidem doloribus odit. Similique, eius'},
    //     {id:4, title:'aeromexico apesta', company:'coderhouse',course:'react js', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic, a accusantium ducimus dolores neque error blanditiis sequi optio saepe iste, doloremque quibusdam commodi in quidem doloribus odit. Similique, eius'},
    //     {id:5, title:'aeromexico apesta', company:'coderhouse',course:'react js', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic, a accusantium ducimus dolores neque error blanditiis sequi optio saepe iste, doloremque quibusdam commodi in quidem doloribus odit. Similique, eius'},
    // ]
    console.log(complaints)
    

    return (      
            <div className="complaintsContainer">
                <h1>Lista de Quejas</h1>
                
                {complaints.map((complaint) => (
                    <div className="complaintSnippet" key={complaint.id}>                        
                            <h2>"{complaint.title}"</h2>
                            <h3>Empresa: {complaint.company}</h3>
                            <h3>Curso: {complaint.course}</h3>
                            <p>{complaint.body}</p>                        
                    </div>
                ))}   
                      
            </div>      
     );
}
 
export default ComplaintsList;

