function Element({todoTask}) {
    if(todoTask.data === false) {
      return (
        <div className="todoElement">
          <input type="text" value={todoTask.entry} readOnly/>
        </div>
      );
    }
    return (
      <div className="todoElement">
        <input type="text" value={todoTask.entry} />
        <button>Delete</button>
        <button>Completed</button>
      </div>
    );
}
  
export default Element;