import Element from "./Element";

//eventually later further properties
//later from local storage or database
const todolistData = [
    {
        entry: "Add new entry here and enter ...",
        editable: false
    },
    {
        entry: "Eintrag 1",
        editable: true
    },
    {
        entry: "Eintrag 2",
        editable: true
    },
    {
        entry: "Eintrag 3",
        editable: true
    }
];

/* same functionality as below
function elements(dataObj, index) {
    return <Element key={index} data={dataObj}/>;
}

const elemList = todolistData.map(elements);
*/

const elemList = todolistData.map((dataObj, index) => {
    return <Element key={index} data={dataObj} />;
});

function TodoList() {
    return (
      <div className="todolist">
        {elemList}
      </div>
    );
}
  
export default TodoList;