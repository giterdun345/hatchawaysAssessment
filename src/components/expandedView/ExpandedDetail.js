const ExpandedDetail = ({grades, id}) => {
  return ( 
      <div className='studentDetail'>
        <ul style={{padding:"0", marginTop:"1.5rem"}}>
          {grades.map((grade, index) => 
            <li key={id + index} style={{padding:'0'}}>
              Test {index + 1}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grade}%
            </li>
          )}
        </ul>
      </div>
   );
}
 
export default ExpandedDetail;