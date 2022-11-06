let btnReset = document.querySelector("#btnReset");

let totalUnits = document.getElementById("totalUnits");
let ampereDemand = document.getElementById("ampereDemand");
let totalTariff = document.getElementById("totalTariff");
let tariffForm = document.querySelector("#tariffForm");

tariffForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData(tariffForm);

  let currentReading = parseInt(formData.get("currentReading"));
  let previousReading = parseInt(formData.get("previousReading"));

  // currentReading > previousReading >= 0
  if (currentReading > previousReading && previousReading >= 0) {
    let consumedUnits = currentReading - previousReading;
    let tariff = 0;
    let unitSlots = new Array();

    // Tariff rates
    let serviceCharges = [
      [30, 50, 75, 125],
      [30, 50, 75, 125],
      [50, 75, 100, 125],
      [50, 75, 100, 125],
      [75, 100, 125, 150],
      [100, 125, 150, 200],
      [125, 150, 175, 200],
      [150, 175, 200, 250],
      [175, 200, 225, 275],
    ];
    let energyCharges = [
      [0.0, 4.0, 5.0, 6.0],
      [3.0, 4.0, 5.0, 6.0],
      [6.5, 6.5, 6.5, 6.5],
      [8.0, 8.0, 8.0, 8.0],
      [9.5, 9.5, 9.5, 9.5],
      [9.5, 9.5, 9.5, 9.5],
      [10.0, 10.0, 10.0, 10.0],
      [11.0, 11.0, 11.0, 11.0],
      [12.0, 12.0, 12.0, 12.0],
    ];

    totalUnits.value = consumedUnits;
    if (consumedUnits > 0) {
      // Unit Slot 1
      if (consumedUnits > 10) {
        unitSlots.push(10);
      } else {
        unitSlots.push(consumedUnits);
      }

      // Unit Slot 2
      if (consumedUnits > 20) {
        unitSlots.push(10);
      } else if (consumedUnits > 10) {
        unitSlots.push(consumedUnits - 10);
      }

      // Unit Slot 3
      if (consumedUnits > 30) {
        unitSlots.push(10);
      } else if (consumedUnits > 20) {
        unitSlots.push(consumedUnits - 20);
      }

      // Unit Slot 4
      if (consumedUnits > 50) {
        unitSlots.push(20);
      } else if (consumedUnits > 30) {
        unitSlots.push(consumedUnits - 30);
      }

      // Unit Slot 5
      if (consumedUnits > 100) {
        unitSlots.push(50);
      } else if (consumedUnits > 50) {
        unitSlots.push(consumedUnits - 50);
      }

      // Unit Slot 6
      if (consumedUnits > 150) {
        unitSlots.push(50);
      } else if (consumedUnits > 100) {
        unitSlots.push(consumedUnits - 100);
      }

      // Unit Slot 7
      if (consumedUnits > 250) {
        unitSlots.push(100);
      } else if (consumedUnits > 150) {
        unitSlots.push(consumedUnits - 150);
      }

      // Unit Slot 8
      if (consumedUnits > 400) {
        unitSlots.push(150);
      } else if (consumedUnits > 250) {
        unitSlots.push(consumedUnits - 250);
      }

      // Unit Slot 9
      if (consumedUnits > 400) {
        unitSlots.push(consumedUnits - 400);
      }

      let ampere = parseInt(ampereDemand.value);
      for (let i = 0; i < unitSlots.length; i++) {
        tariff += unitSlots[i] * energyCharges[i][ampere];
      }

      tariff += serviceCharges[unitSlots.length - 1][ampere];
      totalTariff.value = tariff.toFixed(2);
    }
  }
});

function resetForm() {
  tariffForm.reset();
}
btnReset.addEventListener("click", resetForm);
