import { useState, useEffect } from 'react'
import StudentDetail from './StudentDetail'

const StudentList = ({student, tagQuery}) => {
  const [tag, setTag] = useState([])
  const [display, setDisplay] = useState('')
 
  useEffect(()=>{ 
    const displayTagMatch= ()=> {
      // uses tags to determine if student info should be shown 
      // when tagQuery input is added
      const pattern = new RegExp(`${tagQuery}`, 'gi')
      // if there is no query input display the data 
      if(tagQuery.length === 0){
        setDisplay(true)
      }
      // if there is some query input and there are matches display the data 
      else if(tagQuery.length > 0  
              && tag.filter(assignedTag => pattern.test(assignedTag)).length > 0
      ){
        setDisplay(true)
      } 
      // if there is input in the tagQuery and there are zero matches display emptyQuery component 
      else if(tagQuery.length > 0 
              && tag.filter(assignedTag => pattern.test(assignedTag)).length === 0){
                setDisplay(false)
      }
      // if there is input in the tagQuery and there are zero matches do not display data

      else{
        setDisplay(false)
      }
    }

    displayTagMatch()
  }, [tag, tagQuery])

  return (
    <>
    {display ? <StudentDetail student={student} tag={tag} setTag={setTag}/> : null}
    </>
  );
} 
 
export default StudentList;