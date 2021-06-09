const TagDisplay = ({tagArray}) => {
  return ( 
    <ul className='tagDisplay'> 
      {tagArray.length >= 1 ? 
        tagArray.map((tag, index) => 
          <li key={tag + index}>{tag}</li>
        ) 
        :
        null
      }
    </ul>
   );
}
 
export default TagDisplay;