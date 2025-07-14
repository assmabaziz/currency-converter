const amountFrom = document.getElementById("amountFrom");
const currencyFrom = document.getElementById("currencyFrom");
const currencyFromOptions = document.getElementById("currencyFromOptions");
const amountTo = document.getElementById("amountTo");
const currencyTo = document.getElementById("currencyTo");
const currencyToOptions = document.getElementById("currencyToOptions");
const btnExchangeCurrency = document.getElementById("btnExchangeCurrency");
const courseFrom = document.getElementById("courseFrom");
const courseTo = document.getElementById("courseTo");



btnExchangeCurrency.addEventListener('click', ()=> {
    const amountFromValue = amountFrom.value;
    const currencyFromValue = currencyFrom.value
    const amountToValue = amountTo.value
    const currencyToValue = currencyTo.value
    console.log(amountFromValue, currencyFromValue, amountToValue, currencyToValue);
});
