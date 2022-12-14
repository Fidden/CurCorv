const cards = document.querySelector(".cards");

function CurrencyCardDiff(diffAmount) {
    // get arrow icon;
    const arrow = diffAmount < 0
        ? `<i class="fa fa-arrow-down" aria-hidden="true"></i>`
        : `<i class="fa fa-arrow-up" aria-hidden="true"></i>`;

    //generate class to display price increment / decrement;
    let className = 'diff-amount';
    diffAmount < 0 ? className += " red" : className += " green";

    // return element to display on page;
    return `<span class="${className}">
        ${arrow} (${diffAmount})
    </span>`
}

function CurrencyCard(currency) {
    // get currency difference
    const diff = (currency.Value - currency.Previous).toFixed(2);
    return `<div">
                <div class="card">
                    <p class="card__tittle">${currency.Name}</p>
                    <div class="change-container" >
                        <p class="inc form" > 1 ${currency.CharCode}
                            ${CurrencyCardDiff(diff)}
                        <div class="separate"></div></p>
                        <p class="to">${currency.Value.toFixed(2)} RUB</p>
                    </div>
                </div>
            </div>`;
}

function generateCards(cardsData) {
    for (let key in cardsData.Valute) {
        cards.innerHTML += CurrencyCard(cardsData.Valute[key]);
    }
}

async function getCurrencies() {
    const res = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    const json = await res.json();
    generateCards(json);
}

getCurrencies();
