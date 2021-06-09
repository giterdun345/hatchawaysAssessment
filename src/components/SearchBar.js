// import { useState, useEffect } from 'react'

const SearchBar = ({query, setQuery, type}) => {

  const handleInput= (event)=>{
    // possible to add validation in future here 
    setQuery(event.target.value)
  }

  let placeholder;

  if(type === 'NameSearch'){
    placeholder = 'by name'
  }
  else if(type === 'TagSearch'){
    placeholder = 'by tag'
  }
  else{
    placeholder = 'by magic'
  }

  return ( 
    <form className='search'>
      <input type='text'
             placeholder={`Search ${placeholder}`}
             onChange={event => handleInput(event)} 
             value={query}
      />
    </form>
   );
}
 
export default SearchBar;