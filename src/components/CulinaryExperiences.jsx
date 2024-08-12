import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CulinaryExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios.get('https://fp-be.onrender.com/api/culinaryexperiences')
      .then(res => setExperiences(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExperience = { experience, author };
    try {
      const res = await axios.post('https://fp-be.onrender.com/api/culinaryexperiences', newExperience);
      setExperiences([...experiences, res.data]);
      setExperience('');
      setAuthor('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="f1">
      <br/><h2>Culinary Experiences</h2>
      <form onSubmit={handleSubmit}>
        <b>Share your experience: <br/></b><textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          id="tex2"
        /><br/>
        <b>Your Name:</b> <br/><input
          type="text"
          placeholder=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          id="tex"
        /><br/><br/>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Shared Experiences:</h3>
        {experiences.map((item, index) => (
          <div key={index}>
            <p id="fo"><strong>{item.experience}</strong> - {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulinaryExperiences;
