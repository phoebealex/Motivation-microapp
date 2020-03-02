let button = document.getElementById("roll")
button.addEventListener("click", () => {
    motivQuote(document.getElementById("dropdown").value)
})

function motivQuote(feeling) {

    console.log("feeling", feeling);

    var happy = ["You do you!", "Just keep keeping on", "you are doing great, You got this"];
    var happy = ["You do you!", "Just keep keeping on", "you are doing great, you got this"];
    var sad = ["Tomorrow is a new day", "Clouds always pass", "Emotions are not destinations"];
    var angry = ["Just breath", "Visualize your paradise", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8xB4IJztY1tYyEu4iT4_pxHQBy34g3PragTbD9ASC-vYj5jt0"];

    var s = document.getElementById("emotion").options.namedItem("2");
    var h = document.getElementById("emotion").options.namedItem("1");
    var a = document.getElementById("emotion").options.namedItem("3");

    if (feeling == s) {
        var sQuote = document.getElementById("words");
        var x = Math.floor(Math.random() * 3);
        sQuote.innerHTML = sad[x];
        p.appendChild(sQuote);
       }
    if(feeling == h){
        var hQuote = document.getElementById("words");
        var x = Math.floor(Math.random() * 3);
        hQuote.innerHTML = happy[x];
        p.appendChild(hQuote);
       }
   if(feeling == a){
        var aQuote = document.getElementById("words");
        var x = Math.floor(Math.random() * 3);
        aQuote.innerHTML = angry[x];
        p.appendChild(aQuote);
    }
}
