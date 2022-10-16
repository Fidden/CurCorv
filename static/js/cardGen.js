function cardGen(currency) {
	return `<div">
                    <div class="card">
                        <p class="card__tittle">${currency.Name}</p>
                        <div class="change-container" >
                            <p class="inc form" > 1 ${
															currency.CharCode
														}<span class="diff-amount">
                                    (${(
																			currency.Value - currency.Previous
																		).toFixed(2)}) 
                                    </span>
                            <div class="separate"></div></p>
                            <p class="to">${currency.Value.toFixed(2)} RUB</p>
                        </div>
                    </div>
            </div>`;
}

async function getCurrencies() {
	const res = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
	const cards = await document.querySelector(".cards");
	res.json().then((data) => {
		for (let key in data.Valute) {
			cards.innerHTML += cardGen(data.Valute[key]);
		}

		cards.childNodes.forEach(function (i) {
			let diffAmount = i.querySelector(".diff-amount");
			diffAmountNumber = Number(diffAmount.textContent.trim().slice(1, 5));
			if (diffAmountNumber <= 0) {
				diffAmount.parentElement.classList.add("red");
				diffAmount.parentElement.innerHTML += `<i class="fa fa-arrow-down" aria-hidden="true"></i>`;
			} else {
				diffAmount.parentElement.innerHTML += `<i class="fa fa-arrow-up" aria-hidden="true"></i>`;
			}
		});
	});
}
getCurrencies();
