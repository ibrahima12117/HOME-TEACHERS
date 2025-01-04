"use client";
import { useState } from "react";


function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/recherche?q=${query}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la recherche");
      }
      const data = await response.json();
      setResults(data.results);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResults([]);
    }
  };

  return (
    <div>
    
      <h1 className="text-4xl text-center mt-9 notranslate">
        Bienvenue chez HOME TEACHERS
      </h1>
      <div className="flex justify-center mt-64 gap-4">
        <input
          type="text"
          placeholder="Tapez votre recherche"
          className="bg-cyan-400 w-9/12 h-14 rounded-2xl"
          value={query}
          onChange={handleInputChange}
        />
        <button className="font-bold text-2xl" onClick={handleSearch}>
          Rechercher
        </button>
      </div>
      <div className="mt-8 text-center">
        {error && <p className="text-red-500">{error}</p>}
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index} className="bg-gray-200 p-2 my-2 rounded">
                {result}
              </li>
            ))}
          </ul>
        ) : (
          !error && <p>Aucun résultat trouvé</p>
        )}
      </div>
    </div>
  );
}

export default Search;
