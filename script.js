let button = document.getElemenntById("roll")
roll.addEventListener("click", () => {
    motivQuote(document.getElementById("dropdown").value)
})

function motivQuote(feeling) {



    var happy = ["You do you!", "Just keep keeping on", "you are doing great, you got this"];
    var sad = ["Tomorrow is a new day", "Clouds always pass", "Emotions are not destinations"];
    var angry = ["Just breath", "Visualize your paradise", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8xB4IJztY1tYyEu4iT4_pxHQBy34g3PragTbD9ASC-vYj5jt0"];

    var s = document.getElementById("emotion").options.namedItem("2");
    var h = document.getElementById("emotion").options.namedItem("1");
    var a = document.getElementById("emotion").options.namedItem("3");

    if(feeling = s){
        var sQuote = document.createElement("p");
        var x = Math.floor(Math.random() * 3);
        sQuote.innerHTML = sad[x];
        body.appendChild(sQuote);
       }
    else if(feeling = h){
        var hQuote = document.createElement("p");
        var x = Math.floor(Math.random() * 3);
        sQuote.innerHTML = happy[x];
        body.appendChild(hQuote);
    }
    else if(feeling = a){
        var aQuote = document.createElement("p");
        var x = Math.floor(Math.random() * 3);
        sQuote.innerHTML = angry[x];
        body.appendChild(aQuote);
    }
}
