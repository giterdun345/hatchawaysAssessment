const TagDisplay = ({tagArray}) => {
  return ( 
    <div className='tagDisplay'> 
      {tagArray.length >= 1 ? 
        tagArray.map((tag, index) => 
          <li key={tag + index}>{tag}</li>
        ) 
        :
        null
      }
    </div>
   );
}
 
export default TagDisplay;