const _ = require('underscore');

const myState = {
    name: "Washington",
    capital: "Olympia",
    population: 7062000,
    nickname: "The Evergreen State"
};
const businesses = [
    { name: "Coding Dojo", city:  "Bellevue" },
    { name: "Facebook", city: "Mountain View" },
    { name: "Microsoft", city: "Redmond" },
    { name: "Expedia", city: "Bellevue" }
];

// 1. Strip the myState object into two arrays, one filled with its keys, the other with its values.
console.log( "-----| Problem 1 | -----" );
const keys1 = _.keys( myState );
const values1 = _.values( myState );
console.log( keys1 );
console.log( values1 );

// 2. Using these two new arrays, put them back together as an object to resemble the original myState object.
console.log( "-----| Problem 2 | -----" );
const object2 = _.object( keys1, values1 );
console.log( object2 );

// 3. Alert each of the key - value pairs of the myState object.
console.log( "-----| Problem 3 | -----" );
const pairs3 = _.pairs( myState );
// pairs3.map( (pair, idx) => alert(pair) );
pairs3.map( (pair, idx) => console.log(pair) );

// 4. Return just the names of the businesses from the businesses array.
console.log( "-----| Problem 4 | -----" );
const names4 = _.map( businesses, (business) => business.name );
console.log( names4 );

// 5. Return the object containing “Microsoft”.
console.log( "-----| Problem 5 | -----" );
const object5 = _.find( businesses, (business) => business.name == "Microsoft" );
console.log( object5 );

// 6. Return all the businesses that are located in Bellevue in a new array.
console.log( "-----| Problem 6 | -----" );
const businesses6 = _.filter( businesses, (business) => business.city == "Bellevue" );
console.log( businesses6 );

// 7. Sort the businesses based on the city in ascending order and return the array.
console.log( "-----| Problem 7 | -----" );
const businesses7 = _.sortBy( businesses, (business) => business.city );
console.log( businesses7 );

// 8. Have all the business names be “Coding Dojo” without altering the original array. [hint: use _.map()]
console.log( "-----| Problem 8 | -----" );
const businesses8 = _.map( businesses, (business) => business = { name: "Coding Dojo", city: business.city } );
console.log( businesses );
console.log( businesses8 );
