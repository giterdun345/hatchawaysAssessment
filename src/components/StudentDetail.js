

const StudentDetail = ({student}) => {

  const averageScores = (grades)=>{
    // calculates the average score for student.grades array 
        const total = grades.reduce((acc, grade) =>{
          return acc + Number(grade)
        }, 0)
        return (total / grades.length)
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
          <li>Average: {averageScores(student.grades)} %</li>
        </ul>
      </div>
    </div>
  );
}
 
export default StudentDetail;