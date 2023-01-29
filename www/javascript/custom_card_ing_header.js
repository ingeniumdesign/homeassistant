console.info("%c ING-HEADER %c ".concat("1.0.2"," "),"color: white; background: blue; font-weight: 700;","color: blue; background: white; font-weight: 700;");
console.log("Custom card JavaScript loaded!");

setTimeout(() => {
    var card = document.querySelector(".button-card-header");
    if(card){
        card.style.background = "red";
    }
}, 100);

