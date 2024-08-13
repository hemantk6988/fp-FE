import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CookingTips = () => {
  const [tips, setTips] = useState([]);
  const [tip, setTip] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/cooking-tips')
      .then(res => setTips(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTip = { tip, author };
    try {
      const res = await axios.post('http://localhost:5000/api/cooking-tips', newTip);
      setTips([...tips, res.data]);
      setTip('');
      setAuthor('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cooking-tips/${id}`);
      setTips(tips.filter(tip => tip._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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

      <div id='hh'>
        <br/>
        <h3>Cooking Tips List:</h3>
        {tips.map((tip) => (
          <div key={tip._id}>
            <p id='fo'>{tip.tip}- <i>{tip.author}</i></p>
            <button onClick={() => handleDelete(tip._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookingTips;
