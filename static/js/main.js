// activate the nav btn

var nav_btn = document.querySelector("#nav-btn");


nav_btn.addEventListener("click", navbarToggle);
var item_list = document.querySelector("#items_list");


function navbarToggle(){
     item_list.classList.toggle("actived-btn");
}

// Projects Shorting


function filterItems(category) {

     const items = document.querySelectorAll('.grid-item');
     
     items.forEach(item => {
         if (category === 'all') {
             // Show all items with animation
             item.classList.remove('hidden');
         } else {
             if (item.classList.contains(`category-${category}`)) {
                 // Show matching category with animation
                 item.classList.remove('hidden');
             } else {
                 // Hide non-matching categories with animation
                 item.classList.add('hidden');
             }
         }
     });
 }
 