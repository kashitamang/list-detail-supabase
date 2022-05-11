import { getCountry, getCountries } from './fetch-utils.js';
import { renderCountry } from './render-utils.js';
//console.log('hello from app.js');
// import functions and grab DOM elements

const countriesContainer = document.getElementById('countries');
//console.log(countriesDiv);

// let state
async function loadData() {
  //on load fetch all countries 
    const countries = await getCountries();
    //render and appen all countries to the countries div 
    for (let country of countries) {
        const countryDiv = renderCountry(country);
        countriesContainer.append(countryDiv);
    }
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
loadData();