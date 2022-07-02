import Element from "./Element";
import {useState} from "react"

//eventually later further properties
//later from local storage or database
const todolistData = [
    {
        id: "1",
        entry: "Add new entry here and enter ...",
        data: false
        
    },
    {
        id: "2",
        entry: "Eintrag 2",
        data: true,
        complete: true
    },
    {
        id: "3",
        entry: "Eintrag 3",
        data: true,
        complete: false
    },
    {
        id: "4",
        entry: "Eintrag 4",
        data: true,
        complete: true
    }
];

/* same functionality as below
function elements(dataObj, index) {
    return <Element key={index} data={dataObj}/>;
}

const elemList = todolistData.map(elements);
*/



function TodoList(){
    const [todos, setTodos ] = useState(todolistData);
    return (
      <div className="todolist">
        {todos.map((todoItem, index) => {
        return <Element key={index} todoTask={todoItem} />
    })}
      </div>
    );
    
}
  
export default TodoList;