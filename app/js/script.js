const btnCalculate = document.querySelector("#btnCalculate");

const totalUnits = document.getElementById("totalUnits");
const ampereDemand = document.getElementById("ampereDemand");
const totalTariff = document.getElementById("totalTariff");

btnCalculate.addEventListener('click', function() {
    console.log('btnCalculate_click()');

    var currentReading = parseInt(document.getElementById("currentReading").value);
    var previousReading = parseInt(document.getElementById("previousReading").value);

    totalUnits.value = currentReading - previousReading;
    totalTariff.value = ampereDemand.value;

    return false;
    
});