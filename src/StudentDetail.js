const StudentDetail = ({student}) => {

  const averageScores = (grades)=>{
    // calculates the average score for student.grades array 
        const total = grades.reduce((acc, grade) =>{
          return acc + Number(grade)
        }, 0)
        return (total / grades.length)
    }

  return ( 
    <div>
      <img src= {student.pic} alt={student.firstName}/>
      <h1>{student.firstName}</h1>
      <ul>
        <li>Email: {student.email}</li>
        <li>Company: {student.company}</li>
        <li>Skill: {student.skill}</li>
        <li>Average: {averageScores(student.grades)} %</li>
      </ul>
    </div>
   );
}
 
export default StudentDetail;