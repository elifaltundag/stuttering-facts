const factText = document.getElementById("fact-text");
const generatorButton = document.getElementById('fact-generator');

console.log(factText);


generatorButton.addEventListener("click", () => {
    const factTextState = factText.dataset.state;
    
    if (factTextState === "initial") {
        factText.dataset.state = "expanded";
    }
})