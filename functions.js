// For this first set of functions, assume the input array looks like this:

// const petsArray = [
//     { name: 'spot', type: 'dog' },
//     { name: 'rover', type: 'dog' },
//     { name: 'jumpy', type: 'frog' },
//     { name: 'einstein', type: 'cat' },
// ];

// OUTPUT:
// [
//     { name: 'spot', type: 'dog' },
//     { name: 'rover', type: 'dog' },

// ]

export function getDogs(arr) {
    const dogs = arr.filter((pet) => pet.type === 'dog');
    return dogs;
}

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const names = arr.map((pet) => pet.name);
    return names;
}

/*
OUTPUT: 
['spot', 'rover']
*/

export function getNamesOfDogs(arr) {
    const dogs = arr.filter((pet) => pet.type === 'dog');
    const dognames = dogs.map((dogs) => dogs.name);
    return dognames;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const type = arr.map((pet) => pet.type);
    const reversed = type.reverse();
    return reversed;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanish = arr.map((pet) => {
        const obj = { nombre: pet.name, tipo: pet.type };
        return obj;
    });
    return spanish;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const added = arr.map((pet) => {
        const hungry = { name: pet.name, isHungry: true, type: pet.type };
        return hungry;
    });
    return added;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const shout = arr.map((pet) => {
        const name = pet.name.toUpperCase();
        return {
            ...pet,
            name,
        };
    });
    return shout;
}

/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const joined = arr.map((pet) => {
        const nametype = pet.name + pet.type;
        return nametype;
    });

    return joined;
}

/*
findByName('jumpy', petsArray)

(hint: how do you get the first item out of an array?)

OUTPUT: 
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    const first = arr.find((pet) => pet.name === name);
    return first;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    return arr.map((ar) => [
        ['name', ar.name],
        ['type', ar.type],
    ]);
    // const newArrName = arr.splice(arr.name);
    // const newArrType = arr.splice(arr.type);
    // const newArr = [newArrName + newArrType];
    // return newArr;
}

////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    const car = arr.filter((vehicles) => vehicles.type === 'car');
    return car;
}

/*
Output:
 [
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
  ] ;

*/

export function getChevyCars(arr) {
    const chevy = arr.filter((vehicles) => vehicles.make === 'chevy');
    const car = chevy.filter((vehicles) => vehicles.type === 'car');
    return car;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    const model = arr.map((vehicles) => vehicles.model);
    const string = model.reduce((acc, curr) => acc + curr);
    return string;
}

/*
(add all ages)

Output: 14 
 */

export function getSumOfAges(arr) {
    const sum = arr.map((vehicles) => vehicles.age);
    const total = sum.reduce((acc, curr) => acc + curr);
    return total;
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    let car = 0;
    let van = 0;
    let truck = 0;

    const num = arr.forEach((item) => {
        if (item.type === 'car') {
            car++;
        }
        if (item.type === 'van') {
            van++;
        }
        if (item.type === 'truck') {
            truck++;
        }
    });
    return { car: car, truck: truck, van: van };
    //     return answer;
}

/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */

export function makeKeysString(arr) {
    return '';
}
