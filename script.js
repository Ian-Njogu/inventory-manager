const display = document.getElementById("output");

const addBtn = document.getElementById("addBtn");
const remBtn = document.getElementById("remBtn");

let items = [];

addBtn.addEventListener("click", () => {
    const userInput = document.getElementById("itemInput").value;
    if (userInput) {
        items = [...items, userInput]; //  Spread operator to add item
        updateDisplay();
        document.getElementById("itemInput").value = ""; // Clear input
    }
});

// Use rest operator to remove multiple items at once
remBtn.addEventListener("click", () => {
    const userInput = document.getElementById("itemInput").value;
    if (userInput) {
        const itemsToRemove = userInput.split(",").map(item => item.trim()); // Split and clean input
        removeItems(...itemsToRemove); // Use spread to pass as multiple arguments
        document.getElementById("itemInput").value = ""; // Clear input
    }
});

// Remove one or more items using the rest operator
function removeItems(...names) {
    items = items.filter(item => !names.includes(item)); // Keep items NOT in names
    updateDisplay();
}

// Display updated items
function updateDisplay() {
    if (items.length === 0) {
        display.innerText = "Cart is empty.";
    } else {
        display.innerText = `Cart items: ${items.join(", ")}`;
    }
    console.log(items);
}
