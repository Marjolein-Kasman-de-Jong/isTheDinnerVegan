// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Challenge: isTheDinnerVegan()
// ---------------------------------------------------------------------------

// Initiates input array

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

// Checks if every array item has a source prpoerty with a value of 'plant' and returns 'true' or 'false'

function isTheDinnerVegan(dinner) {
const test = (item) => item.source === 'plant';
return dinner.every(test)
}

// Logs 'true' of 'false' to console

console.log(isTheDinnerVegan(dinner));