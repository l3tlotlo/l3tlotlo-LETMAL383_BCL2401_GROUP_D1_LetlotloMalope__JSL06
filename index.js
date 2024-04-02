// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    let menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (let category in menu) {
        if (menu.hasOwnProperty(category)) {
            // Create an element to represent the category
            let categoryElement = document.createElement("h1");
            categoryElement.textContent = category;
            menuContainer.appendChild(categoryElement);

            // Create an element to represent a list of items
            let itemList = document.createElement("ul");
            menuContainer.appendChild(itemList);

            // Loop through the items in the category and create list items
            menu[category].forEach(function(item) {
                // Create a list item element
                var listItem = document.createElement("li");
                listItem.textContent = item;

                // Attach a click event listener to the list item to add it to the order
                listItem.addEventListener("click", function() {
                    addToOrder(item);
                });

                // Append the list item to the list of items
                itemList.appendChild(listItem);
            });
        }
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    let orderList = document.getElementById("order-items");
    let orderTotal = document.getElementById("order-total");

    // Create a list item for the order
    const listItem = document.createElement("ul");
    listItem.textContent = itemName;

    // Append the list item to the order items list
    orderList.appendChild(listItem);

    // Calculate and update the total price (for demonstration, assuming all items have a price of 10)
    var totalPrice = parseFloat(orderTotal.textContent) || 0;
    totalPrice += 60; // Assuming each item costs $10
    orderTotal.textContent = totalPrice.toFixed(2); // Displaying total up to 2 decimal places
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the initialise function
initMenuSystem(menu);