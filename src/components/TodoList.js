import {useState} from "react";
import Element from "./Element";

function TodoList(){
    const [todos, setTodos] = useState([{id: -1, text: "Add new entry here and enter ...", data: false, complete: false}]);

    const updateEntry = (id, value) => {
        const newList = todos.map((entry) => {
            if(entry.id === id) {
                entry.text = value;
            }
            return entry;
        });
        setTodos(newList);
    }

    const handleEnter = (event) => {
        if(event.key === "Enter") {
            setTodos(prev => ([...prev, {id: 0, text: event.target.value, data: true, complete: false}]));
        }
    }

    const deleteEntry = id => {
        const newList = todos.filter((entry) => entry.id !== id);
        setTodos(newList);
    }

    const entryList = todos.map((entry, index) => {
        entry.id = index;
        return <Element key={index} entry={entry} updateEntry={updateEntry} handleEnter={handleEnter} deleteEntry={deleteEntry} />;
    });

    return (
      <div className="todolist">
        {entryList}
      </div>
    );
    
}
  
export default TodoList;