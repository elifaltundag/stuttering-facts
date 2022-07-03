const factText = document.getElementById("fact-text");
const generatorButton = document.getElementById('fact-generator');

console.log(factText);


generatorButton.addEventListener("click", () => {
    const factTextState = factText.dataset.state;
    const btnPosition = generatorButton.dataset.position;

    if (factTextState === "initial") {
        factText.dataset.state = "expanded";
    }

    if (btnPosition === "initial") {
        console.log("whyyy")
        generatorButton.dataset.position = "is-pushing";
        setTimeout(() => {
            generatorButton.dataset.position = "pushed"
        }, 400);
    }

    

})