/* 
Author: Elif Altundag
Date:   21 Nov 2021
Mixed Messages project on Codecademy. 

The exptectd output of this program is to generate a message to stutterers and their loved ones:
`Stuttering ${verb} ${situation}.\nPeople should ${advice} when talking to a stutterer.`
*/


// Choose a random verb
function chooseVerb() {
    const verbs = ['is', 'can'];
    const chosenVerb = verbs[Math.floor(Math.random() * verbs.length)];
    return chosenVerb;
}

// Save the chosen verb as a variable
// const verb = chooseVerb(); 
// console.log(verb);


// Choose the possible situations depending on the chosen verb: helper function
function chooseSituation(vrb) {
    let possibleSituations = [];

    const isSits = [
        'a speech fluency disorder',
        'assumed to be %1 common among the population',
        'different for every stutterer',
        'based on yet to be discovered neurophysioloical reasons',
    ];

    const isNotSits = [
        'a disease',
        'a habit',
        'anyone\'s fault',
        'psychological'
    ];
    
    const canSits = [
        'be taken under control',
        'be genetic',
        'be progressional',
        'be accompanied by secondary behaviors',
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
            possibleSituations = isNotSits;
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
    let chosenSituation = possibleSituations[Math.floor(Math.random() * possibleSituations.length)];
    return chosenSituation;
}


// Choose a random situation among possible situations for the chosen verb
/* function chooseSituation() {
    // Save possible situations as a block scope variable
    let situations = choosePossibleSituations(verb); 
    
    // Choose the random situation
    let chosenSituation = situations[Math.floor(Math.random() * situations.length)];
    return chosenSituation;
} */

// Save the chosen situation as a variable
// const situation = chooseSituation();
// console.log(situation);

function chooseAdvice() {
    const advices = [
        'not complete words or sentences',
        'remain eye contact',
        'have just a little more patience',
        'not make suggestions like "take a deep breath", "calm down", "talk slowly"'
    ];

    const chosenAdvice = advices[Math.floor(Math.random() * advices.length)];
    return chosenAdvice;
}

// Save the chosen advice as a variable 
// const advice = chooseAdvice(); 
// console.log(advice); 

// The final message 
// const message = `Stuttering ${verb} ${situation}.\nPeople should ${advice} when talking to a stutterer.`;
// console.log(message);



// Create message element
let genMessage = document.createElement('p');
genMessage.id = 'generated-message';
genMessage.innerHTML = '';

let position = document.getElementById('generated-message');



// Hide it first
genMessage.style.display = 'none';

function displayMessage() {
    let verb = chooseVerb(); 
    console.log(verb);
    let situation = chooseSituation(verb);
    console.log(situation);
    let advice = chooseAdvice();
    console.log(advice);
    let message = `Stuttering ${verb} ${situation}.\nPeople should ${advice} when talking to a stutterer.`;
    console.log(message);

    genMessage.innerHTML = message;    
    position.appendChild(genMessage);

    genMessage.style.display = 'block';
    
}

let generatorButton = document.getElementById('gen-button');

generatorButton.addEventListener('click', displayMessage);

