// let name = null; // null

// const version = 8;

// let framework = "Angular ";

// console.log(`We're learning ${framework} version ${version}.`); // 7
// console.log("We're learning " +  framework + " " + version + "."); // 7

// console.log("We're learning " + framework); // We're learning Angular 8
// framework += version; // Angular 8

// console.log("We're learning " + framework); // We're learning Angular 8
// console.log(10 === '10');

// console.log(10 + 1); // 11
// console.log('10' + 1); // 101
// console.log('10' + '1'); // 101

// framework[0]; // "A"
// framework[4]; // "l"

// console.log(framework[framework.length]); // r (last character)


// console.log(true === 'true');
// console.log('false');

// if ( false ) {
//     console.log("I'M IN HERE");
// }

// if ( 'false' ) {
//     console.log("I'M IN HERE 2");
// }

// if ( 1 !== 0) {
// console.log('MATH IS STILL ALIVE');
// }

// console.log(!!0); // false

// console.log(!!true); // true
// console.log(!'undefined'); // false

// console.log(!!!!!null); // true


// if ( 0 ) {
//     console.log("Oh no, I'm wrong...");
// }

// // console.log(element,people,hasCostumes);

// const people = [ {costume: true}, {costume: false} ];
// let hasCostumes = false;

// // Find out if we have a costume
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];

//     if ( element.costume ) {
//         hasCostumes = true;
//     }
// }

// console.log(hasCostumes);


// // hasCustomes = TRUE


// let person = {
//     name: 'BJ',
//     pets: ['Sadie', 'Mia']
// };

// console.log(person.name); // BJ
// person.name = 'Batman';
// console.log(person.name, person.pets, 'HELLO', 'MY', 'NAME', 'IS', person.name); // Batman
// console.log(person.pets); // Sadie, mia

// console.log(person.pets.length);
// console.log(person.pets[0]); // first pet (Sadie)
// console.log(person.pets[1]); //  (Mia)
// console.log(person.pets[2]); //  undefined

// console.log( typeof person ); // Object
// console.log( typeof person.pets ) // Object

// function a() {

// }

// console.log( typeof a ) // function

// name = 'Roger';

// if ( name === 'BJ') {
//     console.log('This is BJ')
// } else if( name === 'Roger' )  {
//     console.log('This is Roger')
// } else if( name === 'Chris' )  {
//     console.log('This is Chris')
// } else {
//     console.log('This is a student')
// }

// if ( name === 'Chris' || name === 'Roger' || name === 'BJ') {
//     if ( name === 'Chris' || name === 'Roger' ) {
//         console.log('I am an awesome TA');
//     } else {
//         console.log("I'm an okay instructor");
//     }

//     console.log("I'm on the GC team!")
// }


// switch (name) {
//     case 'BJ':
//         console.log('Who am I?')
//         break;
//     case 'Chris':
//         console.log('I am Chris');
//         break;
//     case 'Roger':
//         console.log('I am Roger')
//         break;
//     default:
//         console.log('WTF');
// }

// // case sensitive
// console.log('hello' === 'Hello');

// let v1 = 'hello';
// let v2 = 'Hello';
// console.log(v2.toLowerCase());

// console.log(v1 === v2);
// console.log(v1.toLowerCase() === v2.toLowerCase());

// let code = $_REQUEST['country']; // US or us

// const age = 39;
// const canVote = (age >= 18) ?  ? true : false;
// const canVote = (age >= 18);

// if ( age >= 18 ) {
//     canVote = true;
// } else {
//     canVote = false;
// }

// ===, ==, if, else, elseif, (math), ||, &&, >=, >, (nest),
// ( 4 === 5 ) ? this : that,

for(let i = 0; i <= 20; i--) {
    if ( i < -20000) {
        break;
    }
    console.log(i);
}

