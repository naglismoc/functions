
document.getElementById("title").innerText = "Js rules!";

let textasIsHTML = document.getElementById("someText").innerText;
console.log(textasIsHTML);

let div = document.getElementById("someElems");
div.innerHTML = "<h1>labas rytas</h1> <h2>kaip jums sekas?</h2>";


let sandbox = document.getElementById("sandbox");

let HTML = "";
for (let i = 0; i < 10; i++) {
    HTML += " <p>Lorem ipsum dolor sit amet.</p>";
}

sandbox.innerHTML = HTML;

console.log(document.getElementsByTagName("p").length);
