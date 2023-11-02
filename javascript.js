
//Data: assume we have a list of 5 cars
let topCars = [{id: 0, title: "Car 1",  image_url: "images/car0.png"},
         {id: 1,  image_url: "images/car1.png"},
         {id: 2,  image_url: "images/car2.png"},
         {id: 3,  image_url: "images/car3.png"},
         {id: 4,  image_url: "images/car4.png"},
];

/*Slide show on parts*/

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[slideIndex-1].style.display = "block";
  }

}




//Slideshow: Automatic
let autoSlideIndex = 0;//Initial slide = 0
function autoSlideShow() {
//Change the slide_index
  if (autoSlideIndex < topCars.length - 1) {
    autoSlideIndex++;
  } else {
    autoSlideIndex = 0;
  }
  //Change the image source for the img

  document.getElementById("auto-slide-image").src = topCars[autoSlideIndex].image_url;
  //Wait 2 seconds
  setTimeout(autoSlideShow, 2000);//Auto change slide every 2 seconds
}

autoSlideShow() // Call to run auto slideshow



//-------------------------------
//List of items
let itemList= [
    {id: 0, title: "Mercedes", price: 27999,  category: "A", description: "a 2.0-liter turbocharged four-cylinder that combines with an electric motor to make a whopping 671 horsepower in total.", image_url: "images/car0.png"},
    {id: 1, title: "BMW", price: 24999, category: "B", description: "The M3 model of the E90/E92/E93 3 Series range was powered by the BMW S65 V8 engine and was produced in saloon, convertible and coupé body styles. The E9x is the first and only standard production M3 powered by a V8 engine as its successor would revert to using a straight 6 engine. In the standard M3, the S65 engine rated at 309 kW (420 PS; 414 hp) at 8,400 rpm and 400 N⋅m (295 lb⋅ft) at 3,900 rpm.", image_url: "images/car1.png"},
    {id: 2, title: "Audi", price: 20999, category: "C", description: "The Audi TT is a series of 2-door production sports cars and convertibles, made by Audi from 1998 to 2023. The first two generations were assembled by Audi's Hungarian subsidiary, one of the world's biggest engine making plants, using bodyshells manufactured and painted at Audi's Ingolstadt plant and parts made entirely by the Hungarian factory for the third generation.", image_url: "images/car2.png"},
    {id: 3, title: "Chevrolet", price: 50999, category: "D", description: "The Chevrolet Corvette (C6) is the sixth generation of the Corvette sports car that was produced by Chevrolet division of General Motors for the 2005 to 2013 model years. It is the first Corvette with exposed headlamps (as opposed to hidden headlamps) since the 1962 model.", image_url: "images/car3.png"},
  ];

  //Display the above list of items in grid
  let allItems = "";
  for (let i = 0; i < itemList.length ; i++) {
    //build the html dipslay of the item
    allItems += `
      <div class="item-card">
        <div class="item-style">
          <h3 class="text-style-center">${itemList[i].title}</h3>
          <p class="text-style-center">\$${itemList[i].price}</p>
          <img src=${itemList[i].image_url} class="image-style">
          <p class="text-style-center">${itemList[i].description}</p>
          <div class="text-style-center">
            <button class="add-button-style" onclick="addToCartUpdate(${itemList[i].id})">ADD TO CART</button>
          </div>
        </div>
        </div>
     `;
  }
  //Display a list of car objects on webpage UI
  document.getElementById("item-list").innerHTML = allItems;





  /*NAV Bar drop down menu */

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


