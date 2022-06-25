import Element from "./Element";

//eventually later further properties
//later from local storage
const todolistData = [
    {
        entry: "Add new entry here and enter ...",
        data: false
    },
    {
        entry: "Eintrag 2",
        data: true
    },
    {
        entry: "Eintrag 3",
        data: true
    },
    {
        entry: "Eintrag 4",
        data: true
    }
];

/* same functionality as below
function elements(dataObj) {
    return <Element />;
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