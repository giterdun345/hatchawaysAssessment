import { useState } from 'react'
import ExpandedDetail from '../expandedView/ExpandedDetail'
import ExpandButton from '../expandedView/ExpandButton'
import TagInput from '../tags/TagInput'
import TagDisplay from '../tags/TagDisplay'

const StudentDetail = ({student, tag, setTag}) => {
  const [expand, setExpand] = useState(false)

  const averageScores = (grades)=>{
    // calculates the average score for student.grades array 
        const total = grades.reduce((acc, grade) =>{
          return acc + Number(grade)
        }, 0)
        return (total / grades.length)
    }
  
    const handleClick= ()=> {
      setExpand(!expand)
    }

  return ( 
    <div className='studentListItem'>
      <div className='avatar'>
        <img src= {student.pic} alt={student.firstName}/>
      </div>
      <div className='studentDetail'>
        <h1>{student.firstName} {student.lastName}</h1>
        <ul>
          <li>Email: {student.email}</li>
          <li>Company: {student.company}</li>
          <li>Skill: {student.skill}</li>
          <li>Average: {averageScores(student.grades)}%</li>
          {expand ? <ExpandedDetail grades={student.grades} id={student.id} /> : null}
          <li className='tagDisplay'><TagDisplay tagArray={tag} /></li>
          <li><TagInput tag={tag} setTag={setTag}/></li>
        </ul>
      </div>
      <ExpandButton handleClick={handleClick} expand={expand}/>
    </div>  
   );
}
 
export default StudentDetail;