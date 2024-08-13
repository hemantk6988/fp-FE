import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

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
    <div id="f1" >
      <br/>
      <h2 >Recipes</h2>
      <form onSubmit={handleSubmit} >
        <b>Title:</b> <br></br><input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="tex"
        /><br/><br/>
        <b>Ingredients:</b> <br/><input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          id="tex1"
        /><br/><br/>
        <b>Instructions:</b> <br/> <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          id="tex2"
        /><br/><br/>
        <button type="submit">Submit</button><br/><br/>
      </form>
      <div>
        <h3>Recipe List:</h3>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <ul id="fo">
              <li><h4>{recipe.title}</h4>
              <h5>{recipe.ingredients}</h5>
              <p>{recipe.instructions}</p></li>
              <p>Thank You for Responding</p>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
