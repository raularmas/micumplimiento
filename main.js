function calculate() {
    var goalBox= document.getElementById("goal-box")
    var fulfilledBox = document.getElementById("fulfilled-box")
    var fulfilledPercBox = document.getElementById("fulfilled-perc-box")
    var missingBox = document.getElementById("missing-box")
    var indicator = document.getElementById("indicator-color")

    goalBox = Number(goalBox.value)
    fulfilledBox = Number(fulfilledBox.value)
    missingBox.innerHTML = 
        (fulfilledBox - goalBox) > 0
        ? "+" + (fulfilledBox - goalBox).toFixed(2)
        : (fulfilledBox - goalBox).toFixed(2)
    var fulfilledPerc = fulfilledBox * 100 / goalBox
    fulfilledPerc = fulfilledPerc.toFixed(2)
    fulfilledPercBox.innerHTML = fulfilledPerc + "%"

    if (fulfilledPerc >= 100) {
        indicator.style.backgroundColor = "yellow"
    } else if (fulfilledPerc >= 90) {
        indicator.style.backgroundColor = "black"
    } else {
        indicator.style.backgroundColor = "red"
    }
}