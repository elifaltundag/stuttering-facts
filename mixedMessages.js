/* 
Author: Elif Altundag
Date:   21 Nov 2021
Mixed Messages project on Codecademy. 

The exptectd output of this program is to generate a message to stutterers and their loved ones:
`Stuttering ${verb} ${situation}.\nPeople should ${advice} when talking to a stutterer.`
*/


// Choose a random verb
const chooseVerb = () => {
    const verbs = ['is', 'is not', 'can', 'cannot'];
    const chosenVerb = verbs[Math.floor(Math.random() * verbs.length)];
    return chosenVerb;
}

// Get the verb
const verb = chooseVerb(); 
console.log(verb);


// Choose the situation depending on the chosen verb
const allSituations = (vrb) => {
    let situations = [];

    const isSits = [
        'a speech fluency disorder',
        'assumed to be %1 common among the population',
        'different for every stutterer',
        'based on yet to be discovered neurophysioloical reasons'
    ];
    const isnotSits = [
        'a disease',
        'a habit',
        'anyone\'s fault',
        'psychological'
    ];
    const canSits = [               
        'be taken under control',
        'be genetic',
        'be progressional',
        'be accompanied by secondary behaviors'
    ];
    const cannotSits = [
        'be treated 100% after adolescence',
        'be treated by singing',
        'be treated by reading outloud',
        'be learned'
    ];

    // Assign the corresponding situations
    switch (vrb) {
        case 'is':
            situations = isSits;
            break;

        case 'is not':
            situations = isnotSits;
            break;

        case 'can':
            situations = canSits;
            break;

        case 'cannot':
            situations = cannotSits;
            break;

        default:
            situations = [];
            break;
    }
    return situations;
}

const sits = allSituations(verb); 
// console.log(sits);

// Choose a random situation among all situations for the chosen verb
function chooseSituation(arr) {
    const chosenSituation = arr[Math.floor(Math.random() * arr.length)];
    return chosenSituation;
}
const situation = chooseSituation(sits);
console.log(situation);


/*

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
*/