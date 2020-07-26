const btnCalculate = document.getElementById("btnCalculate");
const currentReading = document.getElementById("currentReading");
const previousReading = document.getElementById("previousReading");
const totalUnits = document.getElementById("totalUnits");
const ampereDemand = document.getElementById("ampereDemand");
const totalTariff = document.getElementById("totalTariff");

btnCalculate.addEventListener('click', function() {
    console.log('btnCalculate_click()');
    
    totalUnits.innerHTML = calc(currentReading - previousReading);
});