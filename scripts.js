/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const menuItems = [
  {
    id: 1,
    name: "Snow Crab Leg",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-snowcrab.png?raw=true",
    ingredients: ["Crab", "Sushi Rice", "Vinegar"],
    allergens: ["shellfish"],
  },
  {
    id: 2,
    name: "Bluefin Chutoro",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-bluefin.png?raw=true",
    ingredients: ["Bluefin Tuna", "Sushi Rice", "Vinegar"],
    allergens: [],
  },
  {
    id: 3,
    name: "Seared Bluefin",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-seared-bluefin.png?raw=true",
    ingredients: ["Seared Bluefin Tuna", "Sushi Rice", "Vinegar"],
    allergens: ["shellfish"],
  },
  {
    id: 4,
    name: "Tuna",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-tuna.png?raw=true",
    ingredients: ["Tuna", "Sushi Rice", "Vinegar"],
    allergens: [],
  },
  {
    id: 5,
    name: "Garlic Skipjack Tuna",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-garlic-tuna.png?raw=true",
    ingredients: ["Skipjack Tuna", "Garlic", "Sushi Rice"],
    allergens: [],
  },
  {
    id: 6,
    name: "Yuzu Jalapeno Tuna",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-yuzu-jalapeno-tuna.png?raw=true",
    ingredients: ["Tuna with sushi rice", "Yuzu", "Jalapeno"],
    allergens: [],
  },
  {
    id: 7,
    name: "American Wagyu",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-american-wagyu.png?raw=true",
    ingredients: ["Wagyu Beef", "Sushi Rice", "Vinegar"],
    allergens: [],
  },
  {
    id: 8,
    name: "Umami Oil Seared Beef",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-umami-oil-seared-beef.png?raw=true",
    ingredients: ["Beef", "Umami Oil", "Sushi Rice"],
    allergens: [],
  },
  {
    id: 9,
    name: "Seared Beef with Yakiniku Sauce",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-seared-beef-yakiniku.png?raw=true",
    ingredients: ["Beef", "Yakiniku Sauce", "Sushi Rice"],
    allergens: [],
  },
  {
    id: 10,
    name: "Hokkaido Scallop",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-scallop.png?raw=true",
    ingredients: ["Scallop", "Sushi Rice", "Vinegar"],
    allergens: ["shellfish"],
  },
  {
    id: 11,
    name: "Seared Scallop Japanese Mayo",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-scallop.png?raw=true",
    ingredients: ["Scallop", "Japanese Mayo", "Sushi Rice"],
    allergens: [],
  },
  {
    id: 12,
    name: "Salmon",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-salmon.png?raw=true",
    ingredients: ["Salmon", "Sushi Rice", "Vinegar"],
    allergens: [],
  },
  {
    id: 13,
    name: "Salmon Toro",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-salmon-toro.png?raw=true",
    ingredients: ["Salmon Belly", "Sushi Rice", "Vinegar"],
    allergens: [],
  },
  {
    id: 14,
    name: "Garlic Ponzu Salmon",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-garlic-ponzu-salmon.png?raw=true",
    ingredients: ["Salmon with sushi rice", "Garlic", "Ponzu"],
    allergens: ["shellfish"],
  },
  {
    id: 15,
    name: "Umami Oil Salmon",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-umami-oil-salmon.png?raw=true",
    ingredients: ["Salmon with sushi rice", "Umami Oil", "Vinegar"],
    allergens: [],
  },
  {
    id: 16,
    name: "Seard Salmon Cream Cheese",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-seared-salmon-miso-cream-cheese.png?raw=true",
    ingredients: ["Salmon with sushi rice", "Cream Cheese", "Miso"],
    allergens: ["dairy", "shellfish"],
  },
  {
    id: 17,
    name: "Seared Salmon Japanese Mayo",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-seared-salmon-mayo.png?raw=true",
    ingredients: ["Salmon", "Japanese Mayo", "Sushi Rice"],
    allergens: [],
  },
  {
    id: 18,
    name: "Shrimp",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-shrimp.png?raw=true",
    ingredients: ["Shrimp", "Sushi Rice", "Vinegar"],
    allergens: ["shellfish"],
  },
  {
    id: 19,
    name: "Sweet Shrimp",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-sweet-shrimp.png?raw=true",
    ingredients: ["Sweet Shrimp", "Sushi Rice", "Vinegar"],
    allergens: ["shellfish"],
  },
  {
    id: 20,
    name: "Yuzu Jalapeno Sweet Shrimp",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-yuzu-jalapeno-sweet-shrimp.png?raw=true",
    ingredients: ["Sweet Shrimp  with sushi rice", "Yuzu", "Jalapeno"],
    allergens: ["shellfish"],
  },
  {
    id: 21,
    name: "Eel",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-eel.png?raw=true",
    ingredients: ["Eel", "Sushi Rice", "Vinegar"],
    allergens: [],
  },
  {
    id: 22,
    name: "Seared Eel Cream Cheese",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-seared-eel-miso-cream-cheese.png?raw=true",
    ingredients: ["Eel  with sushi rice", "Cream Cheese", "Miso"],
    allergens: ["dairy", "shellfish"],
  },
  {
    id: 23,
    name: "Yellowtail",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-yellowtail.png?raw=true",
    ingredients: ["Yellowtail", "Sushi Rice", "Vinegar"],
    allergens: [],
  },
  {
    id: 24,
    name: "Squid",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-squid.png?raw=true",
    ingredients: ["Squid", "Sushi Rice", "Vinegar"],
    allergens: ["shellfish"],
  },
  {
    id: 25,
    name: "Tamago",
    type: "nigiri",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/nigiri-tamago.png?raw=true",
    ingredients: ["Egg", "Sushi Rice", "Vinegar"],
    allergens: [],
  },

  {
    id: 30,
    name: "Caterpillar Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-catepillar.png?raw=true",
    ingredients: ["Eel", "Avocado", "Rice"],
    allergens: [],
  },
  {
    id: 31,
    name: "Golden Crunchy Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-golden-crunchy.png?raw=true",
    ingredients: ["Shrimp", "Crunch", " sushi rice"],
    allergens: ["shellfish"],
  },
  {
    id: 32,
    name: "Rainbow Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-rainbow.png?raw=true",
    ingredients: ["Tuna", "Salmon", "Avocado  with sushi rice"],
    allergens: ["shellfish"],
  },
  {
    id: 33,
    name: "Philadelphia Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-philadelphia.png?raw=true",
    ingredients: ["Salmon", "Cream Cheese", "Rice"],
    allergens: ["dairy", "shellfish"],
  },
  {
    id: 34,
    name: "Snow Crab California Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-snowcrab-california.png?raw=true",
    ingredients: ["Crab", "Avocado", "Rice"],
    allergens: ["shellfish"],
  },
  {
    id: 35,
    name: "Spicy Tuna Roll",
    type: "rolls",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/rolls-spicy-tuna.png?raw=true",
    ingredients: ["Tuna", "Spicy Sauce", "Rice"],
    allergens: [],
  },

  {
    id: 60,
    name: "Chicken Gyoza Dumpling",
    type: "sides",
    price: 6.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-chicken-gyoza.png?raw=true",
    ingredients: ["Chicken", "Dough", "Garlic"],
    allergens: [],
  },
  {
    id: 61,
    name: "Garlic Ponzu Sashimi",
    type: "sides",
    price: 4.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-garlic-ponzu-sashimi.png?raw=true",
    ingredients: ["Tuna", "Garlic", "Ponzu"],
    allergens: ["shellfish"],
  },
  {
    id: 62,
    name: "Tuna Sashimi",
    type: "sides",
    price: 4.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-tuna-sashimi.png?raw=true",
    ingredients: ["Tuna", "Leaf", "Ice"],
    allergens: [],
  },
  {
    id: 63,
    name: "Salmon Sashimi",
    type: "sides",
    price: 4.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-salmon-sashimi.png?raw=true",
    ingredients: ["Salmon", "Leaf", "Ice"],
    allergens: [],
  },
  {
    id: 64,
    name: "Yellow Tail Sashimi",
    type: "sides",
    price: 4.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-yellowtail-sashimi.png?raw=true",
    ingredients: ["Yellowtail", "Leaf", "Ice"],
    allergens: [],
  },
  {
    id: 65,
    name: "Shrimp Tempura",
    type: "sides",
    price: 4.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/sides-shrimp-tempura.png?raw=true",
    ingredients: ["Shrimp", "Batter", "Oil"],
    allergens: ["shellfish"],
  },

  {
    id: 90,
    name: "Tantanmen",
    type: "ramen",
    price: 11.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-tantanmen.png?raw=true",
    ingredients: ["Noodles", "Broth", "Pork and Eggs"],
    allergens: ["shellfish"],
  },
  {
    id: 91,
    name: "Miso Ramen",
    type: "ramen",
    price: 11.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-miso-ramen.png?raw=true",
    ingredients: ["Noodles", "Miso Broth", "Pork and Eggs"],
    allergens: ["shellfish"],
  },
  {
    id: 92,
    name: "Shoyu Ramen",
    type: "ramen",
    price: 11.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-shoyu-ramen.png?raw=true",
    ingredients: ["Noodles", "Soy Broth", "Pork and Eggs"],
    allergens: ["shellfish"],
  },
  {
    id: 93,
    name: "Tonkotsu Ramen",
    type: "ramen",
    price: 11.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-tonkotsu-ramen.png?raw=true",
    ingredients: ["Noodles", "Pork Broth", "Chashu"],
    allergens: ["shellfish"],
  },
  {
    id: 94,
    name: "Shrimp Tempura Udon",
    type: "ramen",
    price: 10.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-shrimp-tempura-udon.png?raw=true",
    ingredients: ["Udon", "Shrimp Tempura", "Broth"],
    allergens: ["shellfish"],
  },
  {
    id: 95,
    name: "Beef Udon",
    type: "ramen",
    price: 10.95,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/ramen-beef-udon.png?raw=true",
    ingredients: ["Udon", "Beef", "Broth"],
    allergens: ["shellfish"],
  },

  {
    id: 120,
    name: "Taiyaki Ice Cream",
    type: "desserts",
    price: 6.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/desserts-taiyaki-ice-cream.png?raw=true",
    ingredients: ["Ice Cream", "Waffle", "Red beans"],
    allergens: ["dairy"],
  },
  {
    id: 121,
    name: "Gooey Butter Cake",
    type: "desserts",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/desserts-butter-cake.png?raw=true",
    ingredients: ["Butter", "Sugar", "Flour"],
    allergens: ["dairy"],
  },
  {
    id: 122,
    name: "NY Cheesecake",
    type: "desserts",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/desserts-ny-cheesecake.png?raw=true",
    ingredients: ["Cream Cheese", "Sugar", "Egg"],
    allergens: ["dairy"],
  },
  {
    id: 123,
    name: "Warabimochi",
    type: "desserts",
    price: 4.05,
    imageURL: "https://github.com/myatthitkoko/files/blob/main/desserts-warabimochi.png?raw=true",
    ingredients: ["Mochi", "Kinako", "Syrup"],
    allergens: [],
  },
];

//This function adds cards to the conveyer belt section on the page from the menuItems array with objects
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    
    if (item.price.toString() == "4.05") { 
    // this part is to imitate moving sushi belt where all the plates are at the same price
    // for example, you should never find ramen, or udon on the moving belt
      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, item.name, item.imageURL, item.price); 
      cardContainer.appendChild(nextCard); // Add new card to the container
    }
  }
}

// This function adds cards to full menu section on the page from the menuItems array with objects
function showCardsDetails() {
  //resetting search message to default
  document.getElementById("message").textContent = "";
  //this is based on the given template
  const cardContainer = document.getElementById("menu-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector("#menu-section .menu");

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    //filtering method built on the provided template
    if (document.querySelector('input[name="menu"]:checked').value == "all") {

      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, item.name, item.imageURL, item.price, item.ingredients, i);
      cardContainer.appendChild(nextCard); // Add new card to the container

    } else if (item.type == document.querySelector('input[name="menu"]:checked').value) {

      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, item.name, item.imageURL, item.price, item.ingredients); 
      cardContainer.appendChild(nextCard); // Add new card to the container

    }
  }
}

function sortAlphabetical(order) {
  if (order == "descend") {
    menuItems.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    menuItems.sort((a, b) => a.name.localeCompare(b.name)); //ascending by default
  }
}

function sortPrice(order) {
  if (order == "descend") {
    menuItems.sort((a, b) => b.price - a.price);
  } else {
    menuItems.sort((a, b) => a.price - b.price); //ascending by default
  }
}

function searchCard() {
  document.getElementById("all").checked = true; //to indicate searching for all categories

  const cardContainer = document.getElementById("menu-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector("#menu-section .menu");

  const searchValue = (document.querySelector('input[name="search"]').value); //getting search value and outputting a message
  document.getElementById("message").textContent = 'Showing results for "' + searchValue + '"';

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];

    let condition1 = item.name.toUpperCase().includes(searchValue.toUpperCase());
    let condition2 = item.type.toUpperCase().includes(searchValue.toUpperCase());
    let condition3 = item.price.toString().includes(searchValue.toUpperCase());
    for (let j = 0; j < item.ingredients.length; j ++) {
      let condition4 = item.ingredients[j].toUpperCase().includes(searchValue.toUpperCase());

      if (condition1 || condition2 || condition3 || condition4) {
      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, item.name, item.imageURL, item.price, item.ingredients); 
      cardContainer.appendChild(nextCard); //
      break; //break out of j for-loop as we only need one card per match
      }
    }
  }
}

//this function was barely changed in the process. just p and li added for display purposes
function editCardContent(card, newTitle, newImageURL, price, ingredients) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  if (card.querySelector("p")) {
    const cardPrice = card.querySelector("p");
    cardPrice.textContent = "$" + price.toString();
  }

  if (card.querySelector("li")) {
    const lists = card.querySelectorAll("li");
    for (let i = 0; i < lists.length; i++) {
      lists[i].textContent = ingredients[i];
    }
  }
}

//disclaimer quote at the footer
function quoteAlert() {
  alert(
    "This website is an academic project created for educational purposes only. While the author is employed at a Kura Sushi location, this project is not affiliated with, endorsed by, or sponsored by Kura Sushi USA. All menu item names, pricing, and related content are used for illustrative purposes only and may not reflect current offerings. All images displayed on this site, except the webpage icon, were created by the author himself to avoid the use of copyrighted material."
  );
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//demonstrating removing cards with certain criteria
function removeAllergens(removeValue) {
  for (let i = menuItems.length - 1; i>=0; i--) { //looping backwards because the right side shifts with every card removal while the left side remains intact
    const item = menuItems[i];
    if (item.allergens.includes(removeValue)) {
      console.log(menuItems[i]);
      let removedItem = menuItems.splice(i, 1);
    }
  }
  showCards(); // Call showCards again to refresh
  showCardsDetails(); // Call showCardsDetails again to refresh
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
document.addEventListener("DOMContentLoaded", showCardsDetails);

//This calls radioInput (to filter in banner), checkboxInput (to sort), and allergenInput (to remove cards)
//All of them respond to any changes in their field and take corresponding actions by assigning appropriate functions
document.addEventListener('DOMContentLoaded', () => {
  const radioInput = document.querySelectorAll('input[name="menu"]');
  radioInput.forEach(radio => {
    radio.addEventListener('change', showCardsDetails);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const checkboxInput = document.querySelectorAll('input[name="checkboxSort"]');
  const az = document.getElementById("sortAZ");
  const za = document.getElementById("sortZA");
  const lowHigh = document.getElementById("sortLowPrice");
  const highLow = document.getElementById("sortHighPrice");
  checkboxInput.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked && checkbox == az) {
        sortAlphabetical();
        za.disabled = true;
      }
      if (checkbox.checked && checkbox == za) {
        sortAlphabetical("descend");
        az.disabled = true;
      } 
      if (checkbox.checked && checkbox == lowHigh) {
        sortPrice();
        highLow.disabled = true;
      } 
      if (checkbox.checked && checkbox == highLow) {
        sortPrice("descend");
        lowHigh.disabled = true;
      }
      if ((!checkbox.checked) && (checkbox == az)) {
        za.disabled = false;
      }
      if ((!checkbox.checked) && (checkbox == za)) {
        az.disabled = false;
      }
      if ((!checkbox.checked) && (checkbox == lowHigh)) {
        highLow.disabled = false;
      }
      if ((!checkbox.checked) && (checkbox == highLow)) {
        lowHigh.disabled = false;
      }
      showCards();
      showCardsDetails();
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const allergenInput = document.querySelectorAll('input[name="allergen"]');
  const dairy = document.getElementById("dairy");
  const shellfish = document.getElementById("shellfish");
  allergenInput.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked && checkbox == dairy) {
        removeAllergens("dairy");
        dairy.disabled = true;
      }
      if (checkbox.checked && checkbox == shellfish) {
        removeAllergens("shellfish");
        shellfish.disabled = true;
      }
      if (dairy.disabled || shellfish.disabled) {
        console.log("here");
        document.getElementById("notice").textContent = "Please refresh the page to turn off allergen restrictions";
      }
    });
  });
});