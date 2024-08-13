import React, { useState } from 'react';
import axios from 'axios';

const SearchRecipePage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://fp-be.onrender.com/api/searchable-recipes/search?q=${query}`);
      setResults(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 id='ka'>Search Recipes</h2>
      <form onSubmit={handleSearch} class="project-forms">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id='tex'
        /><br/>
        <button type="submit">Search</button>
      </form>
      <div>
        <h3>Search Results:</h3>
        {results.map((recipe) => (
          <div key={recipe._id}>
            <h4>{recipe.name}</h4>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p><i>- {recipe.author}</i></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipePage;
