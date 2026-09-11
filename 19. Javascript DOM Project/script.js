const services = [
    {
        id: 1,
        name: "Dry Cleaning",
        price: 200
    },
    {
        id: 2,
        name: "Leather & Suede Cleaning",
        price: 599
    },
    {
        id: 3,
        name: "Ironing",
        price: 99
    },
    {
        id: 4,
        name: "Wedding Dress Cleaning",
        price: 999
    },
    {
        id: 5,
        name: "Wash & Fold",
        price: 199
    },
    {
        id: 6,
        name: "Stain Removal",
        price: 249
    }
];

let cart = [];
let currentServiceIndex = 0;

const serviceSlides = document.querySelectorAll(".service-slide");
const cartItems = document.getElementById("cart-items");
const emptyCart = document.getElementById("empty-cart");
const totalAmount = document.getElementById("total-amount");
const bookingForm = document.getElementById("booking-form");
const successPopup = document.getElementById("success-popup");
const successMessage = document.getElementById("success-message");

function showCurrentService() {

    serviceSlides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    serviceSlides[currentServiceIndex].classList.add("active");
}

function nextService() {

    currentServiceIndex++;

    if (currentServiceIndex >= services.length) {
        currentServiceIndex = 0;
    }

    showCurrentService();
}

function previousService() {

    currentServiceIndex--;

    if (currentServiceIndex < 0) {
        currentServiceIndex = services.length - 1;
    }

    showCurrentService();
}

function skipService() {
    nextService();
}

function addCurrentService() {

    const service = services[currentServiceIndex];

    cart.push(service);

    updateCart();

    nextService();
}

function updateCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        emptyCart.style.display = "flex";
    } else {
        emptyCart.style.display = "none";
    }

    let total = 0;

    cart.forEach(function(item, index) {

        total += item.price;

        const row = document.createElement("div");

        row.className = "cart-row";

        row.innerHTML = `
            <span class="serial">
                ${index + 1}
            </span>

            <span class="service-name">
                ${item.name}
            </span>

            <span class="item-price">
                ₹${item.price.toFixed(2)}

                <button
                    class="remove-item"
                    onclick="removeItem(${index})"
                >
                    ×
                </button>
            </span>
        `;

        cartItems.appendChild(row);
    });

    totalAmount.innerText = "₹ " + total;
}

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (cart.length === 0) {

        alert(
            "Please add at least one service to the cart."
        );

        return;
    }

    const fullName =
        document.getElementById("full-name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {

        alert(
            "Please enter a valid 10-digit phone number."
        );

        return;
    }

    const total = cart.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);

    successMessage.innerText =
        "Thank you, " +
        fullName +
        "! Your booking of ₹" +
        total.toFixed(2) +
        " has been confirmed. " +
        "We will contact you at " +
        phone +
        ".";

    successPopup.classList.add("show");

    cart = [];

    updateCart();

    bookingForm.reset();
});

function closePopup() {
    successPopup.classList.remove("show");
}

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        alert(
            "You have been logged out."
        );
    }
}

successPopup.addEventListener("click", function(event) {

    if (event.target === successPopup) {
        closePopup();
    }
});

showCurrentService();
updateCart();