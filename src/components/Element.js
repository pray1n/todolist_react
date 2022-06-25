function Element({data}) {
    if(data.data === false) {
      return (
        <div className="todoElement">
          <input type="text" value={data.entry} readOnly/>
        </div>
      );
    }
    return (
      <div className="todoElement">
        <input type="text" value={data.entry} readOnly/>
        <button>Delete</button>
      </div>
    );
}
  
export default Element;