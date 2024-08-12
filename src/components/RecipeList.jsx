import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://fp-be.onrender.com/api/recipes')
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map(recipe => (
        <div key={recipe._id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
