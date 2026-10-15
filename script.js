const myProducts = [
    // 10 Hot Wheels Mainlines (Including Ferraris and LBWK)
    { id: 1, name: "Ferrari F40 (Mainline)", category: "mainlines", price: 150.00 },
    { id: 2, name: "Ferrari Enzo (Mainline)", category: "mainlines", price: 150.00 },
    { id: 3, name: "Ferrari 599XX (Mainline)", category: "mainlines", price: 150.00 },
    { id: 4, name: "Liberty Walk LB-Silhouette Works GT Nissan 35ZR", category: "mainlines", price: 120.00 },
    { id: 5, name: "Liberty Walk Lamborghini Huracán", category: "mainlines", price: 120.00 },
    { id: 6, name: "Honda Civic EF", category: "mainlines", price: 120.00 },
    { id: 7, name: "Porsche 911 Carrera", category: "mainlines", price: 120.00 },
    { id: 8, name: "Nissan Skyline GT-R (R32)", category: "mainlines", price: 120.00 },
    { id: 9, name: "'94 Bugatti EB110 SS", category: "mainlines", price: 120.00 },
    { id: 10, name: "Toyota Supra", category: "mainlines", price: 120.00 },

    // 5 Hot Wheels Silver Series
    { id: 11, name: "Fleet Flyer & Custom Corvette (Silver)", category: "silver", price: 350.00 },
    { id: 12, name: "Mercedes-Benz 190 E 2.5-16 (Silver)", category: "silver", price: 350.00 },
    { id: 13, name: "Fast & Furious Ford Escort RS (Silver)", category: "silver", price: 350.00 },
    { id: 14, name: "Sakura Sprinter & Nissan Skyline (Silver)", category: "silver", price: 350.00 },
    { id: 15, name: "Volkswagen T1 Panel Bus (Silver)", category: "silver", price: 350.00 },

    // 15 Hot Wheels Premiums (Including 5 Chases)
    { id: 16, name: "Nissan Skyline GT-R R34 (Chase)", category: "premium", price: 3500.00 },
    { id: 17, name: "Mazda RX-7 FC Pandem (Chase)", category: "premium", price: 3200.00 },
    { id: 18, name: "Porsche 911 GT3 RS (Chase)", category: "premium", price: 3800.00 },
    { id: 19, name: "Lamborghini Countach LP 500 S (Chase)", category: "premium", price: 3500.00 },
    { id: 20, name: "Ford Mustang Mach 1 (Chase)", category: "premium", price: 3000.00 },
    { id: 21, name: "Nissan Silvia (S15) Team Transport", category: "premium", price: 850.00 },
    { id: 22, name: "Boulevard Mercedes-Benz 300 SEL", category: "premium", price: 650.00 },
    { id: 23, name: "Fast & Furious Toyota Supra", category: "premium", price: 650.00 },
    { id: 24, name: "Car Culture McLaren F1", category: "premium", price: 650.00 },
    { id: 25, name: "Pop Culture Beatles Hauler", category: "premium", price: 650.00 },
    { id: 26, name: "Ronin Run Nissan 300ZX Twin Turbo", category: "premium", price: 650.00 },
    { id: 27, name: "Modern Classics Koenigsegg Agera", category: "premium", price: 650.00 },
    { id: 28, name: "Desert Rally Porsche 911 Safari", category: "premium", price: 650.00 },
    { id: 29, name: "Slide Street 2 BMW M3 E46", category: "premium", price: 650.00 },
    { id: 30, name: "Japan Historics Datsun Bluebird 510", category: "premium", price: 750.00 },

    // 10 Mini GT
    { id: 31, name: "LBWK Lamborghini Aventador", category: "minigt", price: 950.00 },
    { id: 32, name: "Porsche 911 GT3 RS (Weissach)", category: "minigt", price: 950.00 },
    { id: 33, name: "Bugatti Chiron Pur Sport", category: "minigt", price: 990.00 },
    { id: 34, name: "Nissan GT-R Nismo GT3", category: "minigt", price: 950.00 },
    { id: 35, name: "McLaren Senna Pro", category: "minigt", price: 990.00 },
    { id: 36, name: "Pagani Huayra BC", category: "minigt", price: 1050.00 },
    { id: 37, name: "Toyota GR Supra A90", category: "minigt", price: 950.00 },
    { id: 38, name: "Honda Civic Type R (FL5)", category: "minigt", price: 950.00 },
    { id: 39, name: "Land Rover Defender 110", category: "minigt", price: 1100.00 },
    { id: 40, name: "Koenigsegg Jesko Attack", category: "minigt", price: 1050.00 }
];

const gridContainer = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const myForm = document.getElementById("contactForm");

function showProducts(arr) {
    gridContainer.innerHTML = "";
    
    if (arr.length === 0) {
        gridContainer.innerHTML = "<p>No models found.</p>";
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        
        let cardDiv = document.createElement("div");
        cardDiv.className = "product-card";
        
        cardDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Category: ${item.category}</p>
            <div class="price">₱${item.price.toLocaleString('en-PH', {minimumFractionDigits: 2})}</div>
        `;
        
        gridContainer.appendChild(cardDiv);
    }
}

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function(e) {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }
        
        e.target.classList.add("active");

        let filterValue = e.target.getAttribute("data-filter");

        if (filterValue === "all") {
            showProducts(myProducts);
        } else {
            let filteredList = myProducts.filter(function(prod) {
                return prod.category === filterValue;
            });
            showProducts(filteredList);
        }
    });
}

myForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let nameInput = document.getElementById("name").value.trim();
    let emailInput = document.getElementById("email").value.trim();
    let messageInput = document.getElementById("message").value.trim();

    if (nameInput.length < 3) {
        alert("Name must be at least 3 characters long!");
        return;
    }

    if (!emailInput.includes("@") || !emailInput.includes(".")) {
        alert("Please enter a valid email containing '@' and '.'");
        return;
    }

    if (messageInput.length < 10) {
        alert("Message must be at least 10 characters long.");
        return;
    }

    alert("Success! Your message was sent.");
    myForm.reset();
});

window.onload = function() {
    showProducts(myProducts);
};
