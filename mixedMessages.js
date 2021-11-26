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

// Save the chosen verb as a variable
const verb = chooseVerb(); 
// console.log(verb);


// Choose the possible situations depending on the chosen verb
const choosePossibleSituations = (vrb) => {
    let possibleSituations = [];

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
            possibleSituations = isSits;
            break;

        case 'is not':
            possibleSituations = isnotSits;
            break;

        case 'can':
            possibleSituations = canSits;
            break;

        case 'cannot':
            possibleSituations = cannotSits;
            break;

        default:
            possibleSituations = [];
            break;
    }
    return possibleSituations;
}

// Save possible situations as a variable
const situations = choosePossibleSituations(verb); 
// console.log(situations);

// Choose a random situation among possible situations for the chosen verb
const chooseSituation = (arr) => {
    const chosenSituation = arr[Math.floor(Math.random() * arr.length)];
    return chosenSituation;
}

// Save the chosen situation as a variable
const situation = chooseSituation(situations);
// console.log(situation);

const chooseAdvice = () => {
    const advices = [
        'not complete words or sentences',
        'remain eye contact',
        'have just a little more patience',
        'not make any suggestions like "take a deep breath", "calm down", "talk slowly"'
    ]; 

    const chosenAdvice = advices[Math.floor(Math.random() * advices.length)];

    return chosenAdvice; 
}

// Save the chosen advice as a variable 
const advice = chooseAdvice(); 
// console.log(advice); 

// The final message 
const message = `Stuttering ${verb} ${situation}.\nPeople should ${advice} when talking to a stutterer.`;
console.log(message);

