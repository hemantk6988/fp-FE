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
    <div>
      <h2>Culinary Experiences</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Share your culinary experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
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
        <h3>Shared Experiences</h3>
        {experiences.map((item, index) => (
          <div key={index}>
            <p><strong>{item.experience}</strong> - {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulinaryExperiences;
