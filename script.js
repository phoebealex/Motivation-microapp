let button = document.getElemenntById("roll")
roll.addEventListener("click", () => {
    motivQuote(document.getElementById("dropdown").value)
})

function motivQuote(feeling) {
    var happy = ["You do you!", "Just keep keeping on", "you are doing great, you got this"];
    var sad = ["Tomorrow is a new day", "Clouds always pass", "Emotions are not destinations"];
    var angry = ["Just breath", "Visualize your paradise", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8xB4IJztY1tYyEu4iT4_pxHQBy34g3PragTbD9ASC-vYj5jt0"];

    if(feeling = Sad){
        var sQuote = document.createElement("p");
        var x = Math.floor(Math.random() * 3);
        sQuote.innerHTML = sad[x];
        body.appendChild(sQuote);
       }

}
