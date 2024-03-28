let cards = JSON.parse(localStorage.getItem("cards"));
let template = document.querySelector("#card-template")
let cardList = document.querySelector("#card-list")



for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);

    let cardView = template.content.cloneNode(true);



    cardList.appendChild(cardView);
}