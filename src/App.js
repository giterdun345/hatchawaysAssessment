import { useState, useEffect } from 'react'
import Fetching from './Fetching'
import StudentDetail from './StudentDetail'
import './App.css';

const App= ()=> {
  const [fetching, setFetching] = useState(false)
  const [data, setData] = useState(null)

  const fetchData = async ()=>{
    // do not need any credentials to access the URL, CORS set up
    // numbers have type of string 
    setFetching(true)
    await fetch('https://api.hatchways.io/assessment/students')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.log('Error in fetch', error)) 
    setFetching(false)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  // console.log(data)
  return (
    <div className="App">
      {!fetching && data ? 
        data.students.map((student, idx) => 
          <StudentDetail student= {student} key={student.firstName + idx}/>
        ) :
        <Fetching currentStatus={fetching} />
      }
    </div>

  );
}

export default App;
