import React, { useState } from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import classes from './Languages.module.css'

function Languages() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your logic to change the language
    console.log('Language selected:', language);
  };

  return (
    <LayOut>
      <div className={classes.container}>
        <h1>Select Your Language</h1>
        <form onSubmit={handleSubmit}>
          <select className={classes.select} name="language" id="language" value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            {/* Add more languages as needed */}
          </select>
          <br/>
          <button className={classes.button} type="submit">Change Language</button>
        </form>
      </div>
    </LayOut>
  );
}

export default Languages;
