const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function for searching
function search(str) {
    let results = [];

	//TODO:
    if (str.length > 0) {
        results = fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));
    }

    return results;
}

//function combined with search and show results
function searchHandler(e) {
	//TODO:
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

//function to create a new suggestion list
function showSuggestions(results, inputVal) {
	//TODO:
    const content = results.map(fruit => `<li>${fruit}</li>`);
    suggestions.innerHTML = content.join('');
}

//function to add to input fields
function useSuggestion(e) {
	//TODO:
    const selectedFruit = e.target.innerText;
    input.value = selectedFruit;
    suggestions.innerHTML = '';
}

//events listeners
input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);
