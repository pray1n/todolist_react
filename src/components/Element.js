function Element({entry, updateEntry, handleEnter, deleteEntry}) {
  if(entry.data === false) {
    return (
      <div className="todoElement">
        <input type="text" placeholder={entry.text} onChange={(event) => updateEntry(entry.id, event.target.value)} 
        onKeyDown = {handleEnter} />
      </div>
    );
  }

  //or: onChange={({target}) => updateEntry(entry.id, target.value)}
  return (
    <div className="todoElement">
      <input type="text" value={entry.text} onChange={(event) => updateEntry(entry.id, event.target.value)} />
      <button onClick={() => deleteEntry(entry.id)}>Delete</button>
      <input type="checkbox" />
    </div>
  );
}
  
export default Element;