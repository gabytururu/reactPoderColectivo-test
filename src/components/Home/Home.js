import Frontimg from '../Frontimg/Frontimg';
import ComplaintsList from '../ComplaintsList/ComplaintsList';
import useFetch from '../Hooks/useFetch';
// import {useState, useEffect} from 'react'

const Home = () => {

    // const [complaints, setComplaints] =useState(null)

    
    return ( 
        <div className="home-content">
            <Frontimg />
            < ComplaintsList />  
        </div>
     );
}
 
export default Home;