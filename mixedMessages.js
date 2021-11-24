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
    const situations = [];

    // Assign the corresponding situations
    switch (vrb) {
        case 'is':
            situations.push(
                'a speech fluency disorder',
                'assumed to be %1 common among the population',
                'different for every stutterer',
                'based on yet to be discovered neurophysioloical reasons'
            );
            return situations;
            break;

        case 'is not':
            situations.push(
                'a disease',
                'a habit',
                'anyone\'s fault',
                'psychological'
            );
            return situations;
            break;

        case 'can':
            situations.push(
                'be taken under control',
                'be genetic',
                'be progressional',
                'be accompanied by secondary behaviors'
            );
            return situations;
            break;

        case 'cannot':
            situations.push(
                'be treated 100% after adolescence',
                'be treated by singing',
                'be treated by reading outloud',
                'be learned'
            );
            return situations;
            break;

        default:
            return situations;
            break;
    }
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