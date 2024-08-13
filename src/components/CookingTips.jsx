import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CookingTips = () => {
  const [tips, setTips] = useState([]);
  const [tip, setTip] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios.get('https://fp-be.onrender.com/api/cookingtips')
      .then(res => setTips(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTip = { tip, author };
    try {
      const res = await axios.post('https://fp-be.onrender.com/api/cookingtips', newTip);
      setTips([...tips, res.data]);
      setTip('');
      setAuthor('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="f1">
      <h2 id="ka">Cooking Tips</h2>
      <form onSubmit={handleSubmit} class="project-form">
        <b>Enter your Tip:</b> <br/><textarea
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          id="tex2"
        /><br/>
        <b>Your Name:</b> <br/><input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          id="tex"
        /><br/><br/>
        <button type="submit">Submit</button>
      </form>
      <div id="hh">
        <br/><h3>Submitted Tips:</h3>
        {tips.map((item, index) => (
          <div key={index}>
            <p id="fo"><strong>{item.tip}</strong> - {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookingTips;
