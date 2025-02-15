let counterTitle = document.getElementById("counter");

let counter = 0;

function addCounter() {
    counter = counter + 1

    console.log(counter)
    counterTitle.innerHTML = counter;
}

function minusCounter() {
    if (counter <= 0) {
        return
    }

    counter = counter - 1

    console.log(counter)
    counterTitle.innerHTML = counter;
}

function resetCounter() {
    counter = 0;
    counterTitle.innerHTML = counter;
}