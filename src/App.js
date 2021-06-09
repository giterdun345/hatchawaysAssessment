import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import Fetching from './components/emptyList/Fetching'
import StudentList from './components/studentList/StudentList'
import EmptyQuery from './components/emptyList/EmptyQuery'
import './App.scss';

const App= ()=> {
  const [fetching, setFetching] = useState(false)
  const [data, setData] = useState(null)
  const [queryName, setQueryName] = useState('')
  const [queryTag, setQueryTag] = useState('')
  
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
      student.firstName.toLowerCase().indexOf(queryName.toLowerCase()) > -1 ||
      student.lastName.toLowerCase().indexOf(queryName.toLowerCase()) > -1) 
  }

  const queryResults= ()=>{
    // checks the length of the query results to display the queried students
    // or displays "No results found"
    let queryStudentList = filtrate(data.students)
    if(queryStudentList.length > 0){
      return queryStudentList.map((student) => <StudentList student={student} tagQuery={queryTag} key={student.id}/>)
    }else{
      return <EmptyQuery />
    }
  } 

  return (
    <div className='App'>
      <SearchBar query={queryName} setQuery={setQueryName} type='NameSearch' />
      <div style={{height: "2rem"}}/>
      <SearchBar query={queryTag} setQuery={setQueryTag} type='TagSearch'/>
      {!fetching && data ? 
         queryResults()
        :
         <Fetching currentStatus={fetching} /> 
      }
    </div>
  );
}

export default App;
