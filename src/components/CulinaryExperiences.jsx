import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CulinaryExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/culinary-experiences')
      .then(res => setExperiences(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExperience = { experience, author };
    try {
      const res = await axios.post('http://localhost:5000/api/culinary-experiences', newExperience);
      setExperiences([...experiences, res.data]);
      setExperience('');
      setAuthor('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/culinary-experiences/${id}`);
      setExperiences(experiences.filter(experience => experience._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="f1">
    <br/><h2 id="ka">Culinary Experiences</h2>
      <form onSubmit={handleSubmit} class="project-form">
        <b>Share your experience: <br/><br/></b><textarea
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
        <br/><h3>Culinary Experiences List:</h3>
        {experiences.map((experience) => (
          <div key={experience._id}>
            <p>{experience.experience}<i>- {experience.author}</i></p>
            <button onClick={() => handleDelete(experience._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulinaryExperiences;
