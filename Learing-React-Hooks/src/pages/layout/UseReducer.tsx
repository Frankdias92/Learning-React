import { useReducer, useState } from "react";

type Action = {
  type: string;
  payload: string;
}

type State = {
  tasks: { name: string; isCompleted: boolean }[];
  tasksCount: number;
}

const reducer = (state: State, action: Action) => {
  let newTask

  switch (action.type) {
    case 'add-task':
      newTask = { name: action.payload, isCompleted: false }
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        tasksCount: state.tasksCount + 1,
      };
    case 'toggle-task':
      return {
        ...state,
        tasks: state.tasks.map((item, index) =>
        index === parseInt(action.payload, 10)
        ? {...item, isCompleted: !item.isCompleted}
        : item
        )
      }
    default:
      return state;
  }
}

export function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0 })

  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <input
        type="text"
        placeholder="Adicionar"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: 'add-task', payload: inputValue })
        }}
      >
        adicionar
      </button>

      {state.tasks.map((tasks, index) => (
        <p
          key={index}
          onClick={ () => dispatch({ type: 'toggle-task', payload: index.toString() }) }
          style={{ textDecoration: tasks.isCompleted ? "line-through" : "none" }}
        >
          {tasks.name}
        </p>
      ))}
    </div>
  )
}