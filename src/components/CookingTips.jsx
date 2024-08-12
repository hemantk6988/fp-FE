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
    <div>
      <h2>Cooking Tips</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your tip"
          value={tip}
          onChange={(e) => setTip(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Submitted Tips</h3>
        {tips.map((item, index) => (
          <div key={index}>
            <p><strong>{item.tip}</strong> - {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookingTips;
