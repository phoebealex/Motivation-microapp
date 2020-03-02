let button = document.getElementById("roll")
button.addEventListener("click", () => {
    motivQuote(document.getElementById("dropdown").value)
})

function motivQuote(feeling) {

    console.log("feeling", feeling)

    var happy = ["You do you!", "Just keep keeping on", "you are doing great, You got this"];
    var sad = ["Tomorrow is a new day", "Clouds always pass", "Emotions are not destinations"];
    var angry = ["Just breath", "Visualize your paradise", "Clear your mind, revel in the emptiness"];


    if (feeling == "sad") {
        var sQuote = document.getElementById("words");
        var x = Math.floor(Math.random() * 3);
        sQuote.textContent = sad[x];
    }
    if (feeling == "happy") {
        var hQuote = document.getElementById("words");
        var x = Math.floor(Math.random() * 3);
        hQuote.textContent = happy[x];

    } else if (feeling == "angry") {
        var aQuote = document.getElementById("words");
        var x = Math.floor(Math.random() * 3);
        aQuote.textContent = angry[x];
    }
}
