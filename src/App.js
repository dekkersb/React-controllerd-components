import React from 'react';
import './App.css';

function App() {
  return (
      <div>

    <fieldset className="gegevensContainer">
        <legend>Gegevens</legend>
        <label for={"name"}>Naam:
            <input type="text"
            placeholder={"Wat is je naam?"}/>
        </label>
        <label for={"age"}>Leeftijd:
            <input type="number"
            placeholder="Wat is je leeftijd?"/>
        </label>
    </fieldset>

          <fieldset className="reviewContainer">
              <legend>Jouw review</legend>
              <label for={"origin"}>Hoe heb je dit recept gevonden?</label>
              <form name="form1" id="form1" action="/action_page.php">
                  <select name="subject" id="subject">
                  <option value="google" selected="selected">Google</option>
                      <option value="friend" selected="selected">Vriend</option>
                      <option value="advertisement" selected="selected">Advertentie</option>
                      <option value="other" selected="selected">Anders</option>
              </select>
                  </form>
              <label for={"comments"}>Opmerkingen:</label>
              <input
                  type="text"
                  name="message"
                  placeholder={"Wat vond je van het recept?"}
                  >
              </input>
              <button
                  type="submit"
              >
                  Versturen</button>
          </fieldset>
      </div>
  );
}

export default App;
