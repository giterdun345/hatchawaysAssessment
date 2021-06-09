import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import Fetching from './components/Fetching'
import StudentDetail from './components/StudentDetail'
import EmptyQuery from './components/EmptyQuery'
import './App.scss';

const App= ()=> {
  const [fetching, setFetching] = useState(false)
  const [data, setData] = useState(null)
  const [query, setQuery] = useState('')

  const fetchData = async ()=>{
    // do not need any credentials to access the URL, CORS set up
    // numbers have type of string 
    // object's data is held in array (students)
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

  const filtrate= (studentsList)=>{
    // returns the students matching the query from the searchbar 
    // ensures all lowercase and matches by letter or full name 
    return studentsList.filter(student=> 
      student.firstName.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
      student.lastName.toLowerCase().indexOf(query.toLowerCase()) > -1)
  }

  const queryResults = ()=>{
    // checks the length of the query results to display the queried students
    // or displays "No results found"
    let queryList = filtrate(data.students)
    if(queryList.length > 0){
      return queryList.map((student) => <StudentDetail student={student} key={student.id} />)
    }else{
      return <EmptyQuery />
    }
  } 

  return (
    <div className='App'>
      <SearchBar query={query} setQuery={setQuery} />
      {!fetching && data ? 
         queryResults()
        :
         <Fetching currentStatus={fetching} /> 
      }

    </div>

  );
}

export default App;
