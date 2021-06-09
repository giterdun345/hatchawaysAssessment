import { useState } from 'react'

const TagInput = ({tag, setTag}) => {
  const [tagInput, setTagInput] = useState('')
  const [duplicate, setDuplicate] = useState(false)

  const handleTagInput= (event)=>{
    setTagInput(event.target.value)
  }

  const handleTagSubmit= e=>{
    // adds a tag if it does not already exist 
    e.preventDefault()
    if(!tag.includes(tagInput)){
      setTag([...tag, tagInput.toLowerCase()])
      setDuplicate(false)
    }else{
      setDuplicate(true)
    }
    setTagInput('')
  }

  return( 
    <form className='addTag' onSubmit={handleTagSubmit}>
      <input type='text'
             placeholder= 'Add a tag'
             onChange={event => handleTagInput(event)} 
             value={tagInput}
      />
      <p className={duplicate ? 'showDuplicateError' : 'hideDuplicateError'}>
        This tag already exists
      </p>
    </form>
   );
}

export default TagInput;