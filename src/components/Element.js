function Element({data}) {
    if(data.data === false) {
      return (
        <div className="todoElement">
          <input type="text" value={data.entry} />
        </div>
      );
    }
    return (
      <div className="todoElement">
        <input type="text" value={data.entry} />
        <button>Delete</button>
      </div>
    );
}
  
export default Element;