const headerSlider = document.querySelector(".headerImageSlider");
const headerArrowLeft = document.querySelector("#headerArrowLeft");
const headerArrowRight = document.querySelector("#headerArrowRight");
const cuurentProductImg = document.querySelector(".headerSliderImage");
const cuurentProductTitle = document.querySelector(".headerImageSliderText");
const cuurentProductPrice = document.querySelector(".headerImageSliderPrice");
const cuurentProductColors = document.querySelectorAll(".headerImageSliderButtons");


/*<div class="headerImageSlider">
        <div class="headerSliderImageMain">
        <img src="image1.jpeg" alt="" class="headerSliderImage">
        </div>
        <div class="headerSliderPriceMain">
        <span class="headerImageSliderPrice">$20.99</span>
        </div>
        <div class="headerSliderMainText">
        <h2 class="headerImageSliderText">Burger + White Cheese</h2>
        </div>
        <div class="headerImageSliderButtons">
            <button class="headerImageSliderOrderButton">Order Now</button>
            <button class="headerImageSliderAddToCartButton">Add to cart</button>
        </div>
    </div>

    <div class="headerImageSlider">
        <div class="headerSliderImageMain">
        <img src="image2.jpeg" alt="" class="headerSliderImage">
        </div>
        <div class="headerSliderPriceMain">
        <span class="headerImageSliderPrice">$40.99</span>
        </div>
        <div class="headerSliderMainText">
        <h2 class="headerImageSliderText">Burger + Chicken</h2>
        </div>
        <div class="headerImageSliderButtons">
            <button class="headerImageSliderOrderButton">Order Now</button>
            <button class="headerImageSliderAddToCartButton">Add to cart</button>
        </div>
    </div>


    <div class="headerImageSlider">
        <div class="headerSliderImageMain">
        <img src="image3.jpg" alt="" class="headerSliderImage" style="height: 180px;">
        </div>
        <div class="headerSliderPriceMain">
        <span class="headerImageSliderPrice">$12.99</span>
        </div>
        <div class="headerSliderMainText">
        <h2 class="headerImageSliderText">Burger + Vegies</h2>
        </div>
        <div class="headerImageSliderButtons">
            <button class="headerImageSliderOrderButton">Order Now</button>
            <button class="headerImageSliderAddToCartButton">Add to cart</button>
        </div>
    </div>


    <div class="headerImageSlider">
        <div class="headerSliderImageMain">
        <img src="image4.jpg" alt="" class="headerSliderImage" style="height: 183px;" width="275px">
        </div>
        <div class="headerSliderPriceMain">
        <span class="headerImageSliderPrice">$10.99</span>
        </div>
        <div class="headerSliderMainText">
        <h2 class="headerImageSliderText">Burger + Cheese</h2>
        </div>
        <div class="headerImageSliderButtons">
            <button class="headerImageSliderOrderButton">Order Now</button>
            <button class="headerImageSliderAddToCartButton">Add to cart</button>
        </div>
        */
const Burgerproducts = [
    {
    id: 1,
    title: "Burger + White Cheese",
    price: 20.99,
    img: "image1.jpeg",

    },

    {
        id: 2,
        title: "Burger + Chicken",
        price: 40.99,
        img: "image2.jpeg",
    
        },

        {
            id: 3,
            title: "Burger + Vegies",
            price: 12.99,
            img: "image3.jpg",
        
            },

            {
                id: 4,
                title: "Burger + Cheese",
                price: 10.99,
                img: "image4.jpg",
            
                },
];

let chosenBurgerProduct = Burgerproducts[0];
