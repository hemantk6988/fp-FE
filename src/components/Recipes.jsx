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
      const res = await axios.post('https://fp-be.onrender.com/api/recipes', newRecipe);
      setRecipes([...recipes, res.data]);
      setTitle('');
      setIngredients('');
      setInstructions('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://fp-be.onrender.com/api/recipes/${id}`);
      setRecipes(recipes.filter(recipe => recipe._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 id='ka'>Recipes</h2>
      <form onSubmit={handleSubmit} class="project-form">
        <b>Title:</b> <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="tex"
        /><br/>
        <b>Ingredients:</b> <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          id="tex1"
        /><br/>
        <b>Instructions:</b>  <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          id="tex2"
        /><br/>
        <button type="submit">Submit</button><br/><br/>
      </form>
      <div id='hh'>
      <br></br><h3>Recipe List:</h3>
        {recipes.map((recipe) => (
          <div key={recipe._id}>
            <ul>
            <li><h4>{recipe.title}</h4>
            <h5>{recipe.ingredients}</h5>
            <p>{recipe.instructions}</p></li>
            <button onClick={() => handleDelete(recipe._id)}>Delete</button><br/><br/><br/><br/>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
