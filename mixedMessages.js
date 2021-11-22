/* 
Author: Elif Altundag
Date:   21 Nov 2021
Mixed Messages project on Codecademy. 

The exptectd output of this program is to generate a message to stutterers and their loved ones:
`Stuttering ${verb} ${situation}.\nPeople should ${advice} when talking to a stutterer.`
*/


const verbs = ['is', 'is not', 'can', 'cannot']

// Choosing the first verb

//let indx = Math.floor(Math.random() * verbs1.length)
// console.log(indx);

let verb = verbs[Math.floor(Math.random() * verbs.length)]
// console.log(verb);


// Define different situations for each verb
// Does this create scope pollution?
const situationIs = [
    'a speech fluency disorder',
    'assumed to be %1 common of the population',
    'different for every stutterer',
    'based on yet to be discovered neurophysioloical reasons'
];
const situationIsNot = [
    'a disease',
    'a habit',
    'anyone\'s fault',
    'psychological',
];
const situationCan = [
    'be taken under control',
    'be genetic',
    'be progressional',
    'be accompanied by secondary behaviors',
];
const situationCannot = [
    'be treated 100% after adolescence',
    'be treated by singing',
    'be treated by reading outloud',
    'be learned',
];

// Assign situations based on the first verb
let situations = []

switch (verb) {
    case 'is':
        situations = situationIs;
        break;
    case 'is not':
        situations = situationIsNot;
        break;
    case 'can':
        situations = situationCan;
        break;
    case 'cannot':
        situations = situationCannot;
        break;
    default:
        situations = [];
        break;
}

// Pick a situation
let situation = situations[Math.floor(Math.random() * situations.length)];
// console.log(situation);

// Define different advices
const advices = [
    'not complete words or sentences',
    'remain eye contact',
    'have just a little more patience',
    'not make any suggestions like "take a deep breath", "calm down", "talk slowly"'
]

let advice = advices[Math.floor(Math.random() * advices.length)];

// The final message
console.log('A message for stutterers and their loved ones:');
console.log(`Stuttering ${verb} ${situation}.\nPeople should ${advice} when talking to a stutterer.`); 