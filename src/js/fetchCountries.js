import debounce from 'lodash.debounce';
import countriesCard from '../templates/countries-card.hbs'
import countryCardTpl from '../templates/country-card.hbs'

import '@pnotify/core/dist/BrightTheme.css';

import { alert, Stack } from "@pnotify/core";

const refs = {
    countriesContainer: document.querySelector('.js-countries-container'),
    countryContainer: document.querySelector('.js-country-container'),
    input: document.querySelector('.input'),
}

refs.input.addEventListener('input', debounce(onSearch, 500))
// refs.input.addEventListener('input', debounce(fetchCountries, 500))

function onSearch(e) {
    e.preventDefault()
    
    const searchQuery = e.target.value;

    fetchCountry(searchQuery)
        .then(response => {
            // console.log(response.length)
            if (response.length > 10)
            { const stack = new Stack({
  dir1: "up", 
  firstpos1: 25, 
  push: "top", 
  modal: true, 
  overlayClose: true, 
  context: document.getElementById("page-container") 
});

function notice() {
  alert({
    title: "Alert",
    text: "This is an alert.",
    width: "auto",
    type: ["notice", "info", "success", "error"][
      Math.floor(Math.random() * 3.9999)
    ],
    stack: stack
  });
}};
            if (response.length > 2 && response.length < 10)
            { renderCountriesCard(response) };
            if (response.length === 1)
            { renderCountryCard(response), renderCountriesCard() };
        })
        // .catch(notice());

}

function fetchCountry(countryName) {
    return fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then(result => { return result.json() })
    .catch(onFetchError);
}

function renderCountriesCard(countries) {
    const markup = countriesCard(countries);
    refs.countriesContainer.innerHTML = markup;
}

function renderCountryCard(country) {
    const markup = countryCardTpl(country);
    refs.countryContainer.innerHTML = markup;
}

function onFetchError(error) {
    alert('Please try again later')
}

const stack = new Stack({
  dir1: "up", 
  firstpos1: 25, 
  push: "top", 
  modal: true, 
  overlayClose: true, 
  context: document.getElementById("page-container") 
});

function notice() {
  alert({
    title: "Alert",
    text: "This is an alert.",
    width: "auto",
    type: ["notice", "info", "success", "error"][
      Math.floor(Math.random() * 3.9999)
    ],
    stack: stack
  });
}