const ExpandButton = ({handleClick, expand}) => {
  // styling is under studentListItem
  return ( 
    <button onClick={handleClick} className={!expand ? `buttonPlus`: `buttonMinus`}>
      <span/>
      <span/>
    </button>
   );
}
 
export default ExpandButton;