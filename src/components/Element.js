function Element({entry, updateEntry, deleteEntry}) {
  return (
    <div className="todoElement">
      <input type="text" value={entry.text} onChange={({target}) => updateEntry(entry.id, entry.complete, target.value)} 
        disabled={entry.complete} className={entry.complete?"linethrough":""} />
      <button onClick={() => deleteEntry(entry.id)}>Delete</button>
      <input type="checkbox" checked={entry.complete} onChange={({target}) => updateEntry(entry.id, target.checked, entry.text)} />
    </div>
  );
}
  
export default Element;