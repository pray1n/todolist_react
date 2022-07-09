import {useState, useEffect} from "react";
import Element from "./Element";

function TodoList() {
    const key = 1; //key should be a date
    const [todos, setTodos] = useState(() => getStorage());

    function getStorage() {
        const stringValues = localStorage.getItem(key);
        if(stringValues == null)
            return [];
        let values = JSON.parse(stringValues);
        return values;
    }

    useEffect(() => {
        const stringValues = JSON.stringify(todos);
        localStorage.setItem(key, stringValues);
    }, [todos]);

    const updateEntry = (id, complete, value) => {
        const newList = todos.map((entry) => {
            if(entry.id === id) {
                entry.text = value;
                entry.complete = complete;
            }
            return entry;
        });
        setTodos(newList);
    }

    const addEntry = (event) => {
        if(event.key === "Enter") {
            setTodos(prev => ([...prev, {id: 0, text: event.target.value, data: true, complete: false}]));
            event.target.value = "";
        }
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
        <div className="todoElement">
            <input type="text" placeholder="Add new entry here and enter ..." onKeyDown = {addEntry} />
        </div>
        {entryList}
      </div>
    );
}
  
export default TodoList;