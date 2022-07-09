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

    const addEntry = newEntry => {
        setTodos(prev => ([...prev, newEntry]));
    }

    const deleteEntry = id => {
        const newList = todos.filter((entry) => entry.id !== id);
        setTodos(newList);
    }

    const entryList = todos.map((entry, index) => {
        entry.id = index;
        return <Element key={index} entry={entry} updateEntry={updateEntry} addEntry={addEntry} deleteEntry={deleteEntry} />;
    });

    return (
      <div className="todolist">
        {entryList}
      </div>
    );
    
}
  
export default TodoList;