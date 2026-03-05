const locationZone = document.getElementById('location');
const weight = document.getElementById('weight');
const button = document.getElementById('submit');
let baseCost = 1500;
button.addEventListener("click", ()=>{
    let totalCost;
    if (locationZone.value === "Ibadan") {
        totalCost = baseCost + 5000;
    } else if (locationZone.value === "Lagos") {
       totalCost = baseCost + 1000;
    } else if (locationZone.value === "Abeokuta") {
       totalCost = baseCost + 1500;
    } else {
        "Input a known location";
    }

    if (weight.value > 5) {
        totalCost += 1500;
    }

    const total = `The total shipping cost for your ${weight.value}kg package to Zone ${locationZone.value} is N${totalCost}.`
    document.getElementById('total').textContent = total;
})