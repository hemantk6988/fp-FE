import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    axios.get('https://fp-be.onrender.com/api/recipes')
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, ingredients: ingredients.split(','), instructions };
    try {
      await axios.post('https://fp-be.onrender.com/api/recipes', newRecipe);
      setTitle('');
      setIngredients('');
      setInstructions('');
      setRecipes([...recipes, newRecipe]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Recipe List</h3>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h4>{recipe.title}</h4>
            <h5>{recipe.ingredients}</h5>
            <p>{recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
