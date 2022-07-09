function Element({entry, updateEntry, handleEnter, deleteEntry}) {
  if(entry.data === false) {
    return (
      <div className="todoElement">
        <input type="text" placeholder={entry.text} onChange={(event) => updateEntry(entry.id, event.target.value)} onKeyDown = {handleEnter} />
      </div>
    );
  }

  //or: onChange={({target}) => updateEntry(entry.id, target.value)}
  return (
    <div className="todoElement">
      <input type="text" value={entry.text} onChange={(event) => updateEntry(entry.id, entry.complete, event.target.value)} 
        disabled={entry.complete} className={entry.complete?"linethrough":""} />
      <button onClick={() => deleteEntry(entry.id)}>Delete</button>
      <input type="checkbox" checked={entry.complete} onChange={(event) => updateEntry(entry.id, event.target.checked, entry.text)} />
    </div>
  );
}
  
export default Element;