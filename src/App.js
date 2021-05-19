import React from 'react';
import './App.css';

function App() {
const [nameValue, setNameValue] = React.useState ("");
const [ageValue, setAgeValue] = React.useState ("");
const [commentValue, setCommentValue] = React.useState ("");
const [referenceValue, setReferenceValue] = React.useState ("");

function sendForm (e) {
    console.log("Naam is: " + nameValue + "\nLeeftijd is: " + ageValue + "\nReferentie: " + referenceValue + "\nComment: " + commentValue);

    e.preventDefault();
}

  return (
      <div>
          <form onSubmit={(e)=> sendForm(e)}>
    <fieldset className="gegevensContainer">
        <legend>Gegevens</legend>
        <label>Naam:
            <input
                type="text"
                name={"name"}
                value = {nameValue}
                onChange={(e)=> setNameValue(e.target.value)}
            placeholder={"Wat is je naam?"}
            />
        </label>
        <label>Leeftijd:
            <input
                type="number"
                name={"age"}
                value = {ageValue}
                onChange={(e)=> setAgeValue(e.target.value)}
            placeholder="Wat is je leeftijd?"
            />
        </label>
    </fieldset>

          <fieldset className="reviewContainer">
              <legend>Jouw review</legend>
              <label>Hoe heb je dit recept gevonden?</label>

                  <select name="reference" id="reference"
                          value = {referenceValue}
                          onChange={(e)=> setReferenceValue(e.target.value)}
                  >
                  <option value="Google">Google</option>
                      <option value="Vriend">Vriend</option>
                      <option value="Advertentie">Advertentie</option>
                      <option value="Anders">Anders</option>
                  </select>

              <label>Opmerkingen:</label>
              <input
                  type="text"
                  name="comment"
                  value = {commentValue}
                  onChange={(e)=> setCommentValue(e.target.value)}
                  placeholder={"Wat vond je van het recept?"}
                  >
              </input>
              <button
                  type="submit"
              >
                  Versturen</button>
          </fieldset>
          </form>
      </div>
  );
}

export default App;
