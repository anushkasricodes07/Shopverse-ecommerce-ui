let cartCount = localStorage.getItem("cartCount") || 0;

const buttons = document.querySelectorAll(".cart-btn");
const cartDisplay = document.getElementById("cart-count");

cartDisplay.innerText = cartCount;

buttons.forEach((button, index) => {

    // page reload hone ke baad button state restore karega
    if(localStorage.getItem(`product${index}`) === "added"){

        button.innerText = "Added";
        button.style.backgroundColor = "#ffd580";

    }

    button.addEventListener("click", () => {

        if(button.innerText === "Add to Cart"){

            cartCount++;
            button.innerText = "Added";

            button.style.backgroundColor = "orange";

            localStorage.setItem(`product${index}`, "added");

        }
        else{

            cartCount--;
            button.innerText = "Add to Cart";

            button.style.backgroundColor = "orange";

            localStorage.removeItem(`product${index}`);
        }

        cartDisplay.innerText = cartCount;

        localStorage.setItem("cartCount", cartCount);

    });

});

// Search Feature
const searchBox = document.querySelector(".search-box");

const allProducts = document.querySelectorAll(".box");

searchBox.addEventListener("input", () => {

    let searchValue = searchBox.value.toLowerCase().trim();

    allProducts.forEach((product) => {

        let productId = product.id.toLowerCase();

        if(productId.includes(searchValue) || searchValue === ""){

            product.style.display = "block";

        }
        else{

            product.style.display = "none";

        }

    });

});

// Hero Image Slider
const heroSection = document.querySelector(".hero-section");

const images = [
    "amazonhero.jpg",
    "amzonhero1.jpg",
    "amazon2.jpg"
];

let imageIndex = 0;

function changeHeroImage(){

    heroSection.style.backgroundImage = `url(${images[imageIndex]})`;

    imageIndex++;

    if(imageIndex === images.length){
        imageIndex = 0;
    }
}

setInterval(changeHeroImage, 2000);

// Hamburger Menu
const menuBtn = document.querySelector(".panel-all");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("show-menu");

});
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeBtn.innerText = "☀";

    }

    else{

        themeBtn.innerText = "🌙";

    }

});

