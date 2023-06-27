// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ComplaintsList from './components/ComplaintsList/ComplaintsList'
import AddComplaint from './components/AddComplaint/AddComplaint'
import ComplaintDetail from './components/ComplaintDetail/ComplaintDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'




function App() {
  // const [submit, setSubmit] = useState(false)
  
  // const handleSubmit =()=>{
  //   setSubmit(true)
  // }

  return (
    <Router>
      <div className="App">
        < Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/agregar-queja">
            <AddComplaint />
          </Route>
          <Route path="/quejas/:id">
            < ComplaintDetail  />  
          </Route>
          <Route path="/quejas">
            < ComplaintsList  />  
          </Route>
        </Switch>
       
        {/* {submit && <div style={{backgroundColor:"red", padding:'15px'}}>Se agregó la queja con éxito</div>} */}
        {/* < AddComplaint handleSubmit={handleSubmit} /> */}    
      </div>
    </Router> 
  );
}

export default App;
