import Element from "./Element";

//eventually later further properties
//later from local storage
const todolistData = [
    {
        entry: "Eintrag 1"
    },
    {
        entry: "Eintrag 2"
    },
    {
        entry: "Eintrag 3"
    },
    {
        entry: "Eintrag 4"
    }
]

/* same functionality as below
function elements(dataObj) {
    return <Element />;
}

const elemList = todolistData.map(elements);
*/

const elemList = todolistData.map((dataObj, index) => {
    return <Element key={index} />;
});

function TodoList() {
    return (
      <div className="todolist">
        <h3>Todo list</h3>
        {elemList}
      </div>
    );
}
  
export default TodoList;