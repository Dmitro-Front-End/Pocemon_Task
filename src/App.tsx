
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import Pokemon  from './components/pocemon/Pokemon';



function App() {
  const [ids, setIds] = useState<number[]>([]);
  const [limit, setLimit] = useState(10)
  const changeLimit = useCallback((e : ChangeEvent<HTMLSelectElement> ) => setLimit(+e.target.value),[]);

  useEffect(() => {
    const ids = []
    for (let i = 1; i <= limit; i++) ids.push(i);
    setIds(ids)
  }, [limit])


  const memoPokemons = useMemo(() => ids.map((id ) => <Pokemon key={id.toString()} id={id} />), [ids])

  return ( 
    <div className="App">
      <select onChange={changeLimit} value={limit}>
        <option value={10}>10</option>
        <option value={30}>30</option>
      </select>

      <div className='pokemons-g'>
        {memoPokemons}
      </div>



    </div>
  );
}

export default App;
