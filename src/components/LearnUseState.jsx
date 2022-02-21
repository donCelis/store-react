import { useState } from 'react'

/* Acá no se debe usar el hook */
const LearnUseState = () => {
  /* Hooks */
  /* Reglas
    -Siempre deben ir dentro del componente
    -Llevan el prefijo use
  */

  /* useState -> guardar el estado del componente
    --es un método
    --devuelve un array con dos posiciones
    --la primera: valor del estado (state)
    --la segunda: es el modificador (setter), es una función
  */
  // const [userName, setUserName] = useState('Usuario')

  /* hace algo despues de un tiempo */
  /*  setTimeout(() => {
    setUserName('Alexander')
  }, 3000) */

  const [count, setCount] = useState(0)

  const styles = {
    margin: '1rem',
    padding: '1rem'
  }

  return (
    <div className='container'>
      <p>Contador</p>
      <section style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => setCount(count - 1)} style={styles}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)} style={styles}>+</button>
      </section>
    </div>
  )
}
export default LearnUseState
