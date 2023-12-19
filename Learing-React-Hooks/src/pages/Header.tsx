import './Header.css'



export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">UseState</a></li>
          <li><a href="/useeffect">UseEffect</a></li>
          <li><a href="/memo">UseMemo</a></li>
          <li><a href="/useref">UseRef</a></li>
          <li>useContext</li>
          <li>useReducer</li>
        </ul>
      </nav>
    </header>
  )
}