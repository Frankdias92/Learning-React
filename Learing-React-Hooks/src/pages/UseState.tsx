import { useState } from "react";
import './UseState.css'


function countInitial() {
  return 4
}

export function UseState() {

  const [count, setCount] = useState(countInitial());

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      </div>

      <article>
        <p>
          A diferença entre setCount(count - 1) e setCount(prevCount => prevCount - 1) está relacionada ao comportamento do estado em situações de atualizações concorrentes.
        </p>
        <p>
          Quando você utiliza setCount(count - 1), você está atualizando o estado diretamente com um valor calculado a partir do estado atual. Isso pode causar problemas em situações de atualizações concorrentes, onde múltiplas atualizações do estado podem ocorrer ao mesmo tempo.
        </p>

        <p>
          Por outro lado, ao utilizar setCount(prevCount => prevCount - 1), você está garantindo que a atualização do estado será feita de forma segura, pois a função de atualização recebe o estado anterior como argumento e retorna o novo valor do estado. Isso evita problemas de concorrência, garantindo que as atualizações do estado sejam feitas de forma correta e segura.
        </p>
          
        <p>
          Portanto, a principal diferença está na segurança das atualizações do estado em situações de concorrência. O uso da função de atualização do estado com o estado anterior como argumento é a abordagem recomendada para garantir a integridade das atualizações do estado em aplicações React.
        </p>

      </article>
    </>

  )
}