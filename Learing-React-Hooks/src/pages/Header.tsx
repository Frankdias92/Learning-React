import './Header.css'



export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">UseState</a></li>
          <li><a href="/useeffect">UseEffect</a></li>
          <li>UseMemo</li>
          <li>UseRef</li>
          <li>useContext</li>
          <li>useReducer</li>
        </ul>
      </nav>
    </header>
  )
}