const search = document.querySelector(".search");
search.addEventListener('input', () => {
    let text = this.value.trim().toLowerCase();
    let cardArr = document.querySelectorAll(".card");
    if (text !== "") {
        cardArr.forEach(function (elem) {
            let cardTittle = elem.querySelector(".card__tittle");
            if (cardTittle.innerText.toLowerCase().search(text) === -1) {
                cardTittle.parentNode.parentNode.classList.add("hide");
            } else {
                cardTittle.parentNode.parentNode.classList.remove("hide");
            }
        });
    } else {
        cardArr.forEach(function (elem) {
            let cardTittle = elem.querySelector(".card__tittle");
            cardTittle.parentNode.parentNode.classList.remove("hide");
        });
    }
});
