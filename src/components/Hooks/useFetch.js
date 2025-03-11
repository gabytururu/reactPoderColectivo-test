import {useState, useEffect} from 'react'

const useFetch = (url) =>{
    // const url = 'http://localhost:8000/complaintsList'

    const [complaints, setComplaints] =useState(null)

    useEffect(()=>{
      fetch(url)
        .then(res => {
          console.log(res)
          if(!res.ok){
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

    return {complaints}

}

export default useFetch