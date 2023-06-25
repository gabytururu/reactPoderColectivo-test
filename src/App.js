// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Frontimg from './components/Frontimg/Frontimg'
import ComplaintsList from './components/ComplaintsList/ComplaintsList'
import ComplaintDetail from './components/ComplaintDetail/ComplaintDetail'
import AddComplaint from './components/AddComplaint/AddComplaint'
import {useState, useEffect} from 'react'
//import {useState} from 'react'

function App() {
  // const [submit, setSubmit] = useState(false)
  
  // const handleSubmit =()=>{
  //   setSubmit(true)
  // }
  const [complaints, setComplaints] =useState(null)

  useEffect(()=>{
    fetch(' http://localhost:8000/complaintsList')
      .then(res => {
        console.log(res)
        if(res !== res.ok){
          throw Error('data was not fetch, either inexistent enpoint or denied req')
        }        
        return res.json()
      })
      .then((data)=>{
        console.log(data)
        setComplaints(data)
      })
      .catch(err =>{
        console.log(err.message)
      })
  },[])



  return (
    <div className="App">
      < Navbar/>
      < Frontimg />
      {complaints && < ComplaintsList complaints={complaints} />  }
      < ComplaintDetail />

      {/* {submit && <div style={{backgroundColor:"red", padding:'15px'}}>Se agregó la queja con éxito</div>} */}
      {/* < AddComplaint handleSubmit={handleSubmit} /> */}
      < AddComplaint />
    </div>
  );
}

export default App;
