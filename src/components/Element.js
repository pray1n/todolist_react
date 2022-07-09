function Element({entry, updateEntry, addEntry}) {
  const handleEnter = (event) => {
    if(event.key === "Enter") {
      addEntry({id: "", text: event.target.value, data: true, complete: false});
    }
  }

  if(entry.data === false) {
    return (
      <div className="todoElement">
        <input type="text" value={entry.text} onChange={(event) => updateEntry(entry.id, event.target.value)} 
        onKeyDown = {handleEnter} />
      </div>
    );
  }
  //or: onChange={({target}) => updateEntry(entry.id, target.value)}
  return (
    <div className="todoElement">
      <input type="text" value={entry.text} onChange={(event) => updateEntry(entry.id, event.target.value)} />
      <button>Delete</button>
      <button>Completed</button>
    </div>
  );
}
  
export default Element;