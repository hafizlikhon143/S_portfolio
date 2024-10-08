
var items_cont = document.querySelector(".carousel-items-p");
var items_cont_inner = document.querySelector(".carousel-wrapper-p");
let scrollPoint = 0;
let maxScrollPoint = 0;

// Scroll on Click
var btn_left = document.querySelector(".carousel-btn-l");
var btn_right = document.querySelector(".carousel-btn-r");

btn_left.addEventListener("click", scrollLeft);
btn_right.addEventListener("click", scrollRight);

// Define Max Scroll Point
maxScrollPoint =Math.ceil(items_cont.scrollWidth / items_cont_inner.getBoundingClientRect().width);


function scrollRight(){
    if(scrollPoint <= maxScrollPoint + 1){
        scrollPoint += 1;
    }
    else{
        scrollPoint = 0;
    }
    items_cont.scrollLeft = scrollPoint * 320;    
    
    console.log(scrollPoint);
}

function scrollLeft(){
    if(scrollPoint > 0){
        scrollPoint -= 1;
    }
    else{
        scrollPoint = maxScrollPoint + 2;
    }
    items_cont.scrollLeft = scrollPoint * 320;    
    console.log(scrollPoint);
}


// Scroll on time animation

var scrollOnTime = setInterval(e=>{
    // determine ho much i scroll width then devide it according to size of viewed items to know when to stop
    maxScrollPoint =Math.ceil(items_cont.scrollWidth / items_cont_inner.getBoundingClientRect().width);
    items_cont.scrollLeft = scrollPoint * 320;
    if(maxScrollPoint + 1 > scrollPoint){
        scrollPoint = scrollPoint + 1;
    }else{
        scrollPoint = 0;
    }
},5000)


// Active container

var all_card = document.querySelectorAll(".carousel-item-p");

all_card.forEach(card=>{
    card.addEventListener("mouseenter", open_card);
    card.addEventListener("mouseleave", close_card);
});

function open_card(e){
    try{
        e.target.querySelector("img").classList.add("blur-pic");
        e.target.querySelector(".hidden_cont").classList.add("active_h_c");
        e.target.querySelector(".hidden_cont").style.transition = "all ease-in-out 0.5";
    }
    catch(TypeError){
        return null;
    }
}
function close_card(e){
    try{
        e.target.querySelector("img").classList.remove("blur-pic");
        e.target.querySelector(".hidden_cont").classList.remove("active_h_c");
        e.target.querySelector(".hidden_cont").style.transition = "all ease-in-out 0.5";
    }
    catch(TypeError){
        return null;
    }
}

// Shorting According to Typew

var btn_filter = document.querySelectorAll(".btn-filter");

function shortCard(card_category){
    all_card.forEach(e=>{
        let t_elem = e.dataset.category;

        if(t_elem == card_category || card_category == "all"){
            e.classList.remove("d-none");
        }
        else{
            e.classList.add("d-none");
        }
    })
}

btn_filter.forEach(btn_f=>{
    function btn_f_remove(){
        btn_filter.forEach(bf=>{
            bf.classList.remove("active");
        })
    }
    btn_f.addEventListener("click", e=>{
        btn_f_remove();
        e.target.classList.add("active");
        shortCard(e.target.dataset.filter);
    });
})