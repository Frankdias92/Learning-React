import { useReducer, useState } from "react";
import { X } from "@phosphor-icons/react";

type Action =
  | { type: 'add-task'; payload: string }
  | { type: 'toggle-task'; payload: string }
  | { type: 'REMOVE-TASK'; payload: string };
  

type State = {
  tasks: { id: string; name: string; isCompleted: boolean }[];
  tasksCount: number;
}



const reducer = (state: State, action: Action) => {
  let newTask

  switch (action.type) {
    case 'add-task':
      newTask = { id:state.tasksCount.toString(), name: action.payload, isCompleted: false }
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        tasksCount: state.tasksCount + 1,
      };
    case 'toggle-task':
      return {
        ...state,
        tasks: state.tasks.map(task =>
        task.id === action.payload
        ? {...task, isCompleted: !task.isCompleted}
        : task
        )
      };
    case 'REMOVE-TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        tasksCount: state.tasksCount -1
      }
    default: 
      return state;
  }
  
}



export function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0 })

  const [inputValue, setInputValue] = useState('')


  return (
    <div className="container">
      <div className="item-wrapper">
        <input className="form-field"
          type="text"
          placeholder="Adicionar"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: 'add-task', payload: inputValue })
            setInputValue('')
          }}
        >
          adicionar
        </button>
      </div>

      <ul className="wrapper-effect">
        {state.tasks.map((tasks, id) => (
          <li className="li-wrapper item-width"
            key={id}
          >
            <a
              onClick={ () => dispatch({ type: 'toggle-task', payload: id.toString() }) }
              style={{ textDecoration: tasks.isCompleted ? "line-through" : "none" }}  
            >
              {tasks.name}
            </a>

            <button onClick={() => dispatch({
              type: 'REMOVE-TASK', payload: tasks.id
            })}>
              <X />
            </button>


          </li>
         ))}
      </ul>
    </div>
  )
}