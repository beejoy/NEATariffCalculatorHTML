const btnCalculate = document.querySelector("#btnCalculate");

const totalUnits = document.getElementById("totalUnits");
const ampereDemand = document.getElementById("ampereDemand");
const totalTariff = document.getElementById("totalTariff");

btnCalculate.addEventListener('click', function() {
    console.log('btnCalculate_click()');

    var currentReading = parseInt(document.getElementById("currentReading").value);
    var previousReading = parseInt(document.getElementById("previousReading").value);

    // currentReading > previousReading >= 0
    if (currentReading > previousReading && previousReading >= 0) {
        var consumedUnits = currentReading - previousReading;
        var tariff = 0;
        var unitSlots = new Array();
        
        // Tariff rates
        var serviceCharges = [
            [30, 50, 75, 125],
            [30, 50, 75, 125],
            [50, 75, 100, 125],
            [50, 75, 100, 125],
            [75, 100, 125, 150],
            [100, 125, 150, 200],
            [125, 150, 175, 200],
            [150, 175, 200, 250],
            [175, 200, 225, 275]
        ];
        var energyCharges = [
            [0.0, 4.0, 5.0, 6.0],
            [3.0, 4.0, 5.0, 6.0],
            [6.5, 6.5, 6.5, 6.5],
            [8.0, 8.0, 8.0, 8.0],
            [9.5, 9.5, 9.5, 9.5],
            [9.5, 9.5, 9.5, 9.5],
            [10.0, 10.0, 10.0, 10.0],
            [11.0, 11.0, 11.0, 11.0],
            [12.0, 12.0, 12.0, 12.0]
        ];

        totalUnits.value = consumedUnits;
        if (consumedUnits > 0) {
            // Unit Slot 1
            if (consumedUnits > 10) {
                unitSlots.push(10);
            }
            else {
                unitSlots.push(consumedUnits);
            }

            // Unit Slot 2
            if (consumedUnits > 20) {
                unitSlots.push(10);
            }
            else if (consumedUnits > 10) {
                unitSlots.push(consumedUnits - 10);
            }

            // Unit Slot 3
            if (consumedUnits > 30) {
                unitSlots.push(10);
            }
            else if (consumedUnits > 20) {
                unitSlots.push(consumedUnits - 20);
            }

            // Unit Slot 4
            if (consumedUnits > 50) {
                unitSlots.push(20);
            }
            else if (consumedUnits > 30) {
                unitSlots.push(consumedUnits - 30);
            }

            // Unit Slot 5
            if (consumedUnits > 100) {
                unitSlots.push(50);
            }
            else if (consumedUnits > 50) {
                unitSlots.push(consumedUnits - 50);
            }

            // Unit Slot 6
            if (consumedUnits > 150) {
                unitSlots.push(50);
            }
            else if (consumedUnits > 100) {
                unitSlots.push(consumedUnits - 100);
            }

            // Unit Slot 7
            if (consumedUnits > 250) {
                unitSlots.push(100);
            }
            else if (consumedUnits > 150) {
                unitSlots.push(consumedUnits - 150);
            }

            // Unit Slot 8
            if (consumedUnits > 400) {
                unitSlots.push(150);
            }
            else if (consumedUnits > 250) {
                unitSlots.push(consumedUnits - 250);
            }

            // Unit Slot 9
            if (consumedUnits > 400) {
                unitSlots.push(consumedUnits - 400);
            }

            var ampere = parseInt(ampereDemand.value);
            for (var i = 0; i < unitSlots.length; i++) {
                tariff += unitSlots[i] * energyCharges[i][ampere];
            }

            tariff += serviceCharges[unitSlots.length-1][ampere];
            totalTariff.value = tariff.toFixed(2);
        }
    }
});