// goods info
const drink1 = {
    id: 1,
    name: "Iced Latte",
    category: "Coffee",
    volumeMl: 350,
    priceUsd: 4.5,
    inStock: true,
    description: "Chilled espresso with milk and ice, smooth and refreshing."
};

const drink2 = {
    id: 2,
    name: "Green Tea",
    category: "Tea",
    volumeMl: 500,
    priceUsd: 3.0,
    inStock: false,
    description: "Traditional brewed green tea, light and aromatic."
};

// Get the buttons
const btn1 = document.getElementById("soda1");
const btn2 = document.getElementById("soda2");

// body and modal room
const bodyElement = document.body;

const modal = document.createElement('div');
modal.id = 'modal';
modal.className = 'modal';
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "20%";
modal.style.left = "50%";
modal.style.transform = "translateX(-50%)";
modal.style.background = "#fff";
modal.style.padding = "16px";
modal.style.border = "1px solid #000";
modal.style.zIndex = "1000";

bodyElement.appendChild(modal);

// helper to render drink info as list
function renderDrink(drink) {
    return `
        <ul>
            <li><b>ID:</b> ${drink.id}</li>
            <li><b>Name:</b> ${drink.name}</li>
            <li><b>Category:</b> ${drink.category}</li>
            <li><b>Volume:</b> ${drink.volumeMl} ml</li>
            <li><b>Price:</b> $${drink.priceUsd}</li>
            <li><b>In stock:</b> ${drink.inStock ? "Yes" : "No"}</li>
            <li><b>Description:</b> ${drink.description}</li>
        </ul>
        <button id="close-modal">Close</button>
    `;
}

// Events
btn1.onclick = function() {
    modal.innerHTML = renderDrink(drink1);
    modal.style.display = "block";

    document.getElementById("close-modal").onclick = () => {
        modal.style.display = "none";
    };
};

btn2.onclick = function() {
    modal.innerHTML = renderDrink(drink2);
    modal.style.display = "block";

    document.getElementById("close-modal").onclick = () => {
        modal.style.display = "none";
    };
};
