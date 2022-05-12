import { getCountry } from '../fetch-utils.js';
import { renderCountryDetail } from '../render-utils.js';

const countryDetailsContainer = document.getElementById('country-details');

async function loadData() {
    //on load get id from URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    //use id to fetch country 
    const country = await getCountry(id);
    countryDetailsContainer.append(renderCountryDetail(country));
}

loadData();