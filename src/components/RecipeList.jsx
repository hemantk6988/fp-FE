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
          <ol>
          <h3>{recipe.title}</h3>
          <h4>{recipe.ingredients}</h4>
          <p>{recipe.instructions}</p>
          </ol>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
