import { useState, useEffect } from 'react'
import './main.css'
import SearchBox from './components/SearchBox'
import TableList from "./components/TableList";

const limit = 25;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [searching, setSearching] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!searching) {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1) * limit}`)
        .then(res => res.json())
        .then(async data => {
          setTotal(data.count);
          const details = await Promise.all(
            data.results.map(p =>
              fetch(p.url).then(res => res.json())
            )
          );
          setPokemons(details);
        });
    }
  }, [page, searching]);

  const handleSearch = (name) => {
    setSearching(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
        if (!res.ok) throw new Error("Pokémon não encontrado");
        return res.json();
      })
      .then(data => setPokemons([data]))
      .catch(() => setPokemons([]));
  };

  const handleClearSearch = () => {
    setSearching(false);
    setPage(1);
  };




  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pokédex</h1>
      <SearchBox onSearch={handleSearch} />
      {searching && (
        <button
          onClick={handleClearSearch}
          className="mb-4 bg-gray-300 px-3 py-1 rounded"
        >
          Limpar busca
        </button>
      )}
      {!searching && (
        <div className="flex gap-2 justify-center mt-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <span>Página {page}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page * limit >= total}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      )}
      <TableList pokemons={pokemons} />
      {!searching && (
        <div className="flex gap-2 justify-center mt-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <span>Página {page}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page * limit >= total}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  )
}

export default App
