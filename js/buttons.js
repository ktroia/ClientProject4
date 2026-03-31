var all_cards = document.querySelectorAll("#cards div"); //selects all cards
var card_hold =document.querySelector("#cards");
var pr_button = document.querySelector("#pr_but");
var prs_only = 0;
const recent_btn = document.querySelector("#recent");
const time_btn = document.querySelector("#time");
const place_btn = document.querySelector("#place");

//functions adapted from
// https://getbutterfly.com/sorting-and-ordering-elements-based-on-data-attributes-with-vanilla-javascript/ 
//https://medium.com/@ryan_forrester_/sorting-by-date-in-javascript-how-to-guide-2c6d2d0d230b

console.log("js loded");
function recent(){
    const cards_array = Array.from(card_hold.getElementsByTagName("div"));
    console.log("sort by recent");
    cards_array.sort((a,b) => new Date(b.dataset.date) - new Date(a.dataset.date));
    cards_array.forEach(function(item) { card_hold.appendChild(item)});
    update_select(recent_btn);
}

function placement(){
    console.log("sort by place");
       const cards_array = Array.from(card_hold.getElementsByTagName("div"));
    cards_array.sort((a,b) => a.dataset.place - b.dataset.place);
    cards_array.forEach(function(item) { card_hold.appendChild(item)});
      update_select(place_btn);   
}

function time(){
    console.log("sort by time");
    const cards_array = Array.from(card_hold.getElementsByTagName("div"));
    cards_array.sort((a,b) => a.dataset.timeSeconds - b.dataset.timeSeconds);
    cards_array.forEach(function(item) {card_hold.appendChild(item)});
     update_select(time_btn);    
}


//PR is a toggle
//adapted from https://youtu.be/U9M8wn0Fm-M?si=6IbCl2okmpNUctTO 
function pr_switch(){
    //turn ON pr
    if(prs_only == 0){
        console.log("prs only on");
        prs_only = 1;
        pr_button.innerHTML = "All Races";
        for (let i = 0; i < all_cards.length; i++) {
            if(all_cards[i].dataset.pr == 0){
                console.log("remove card from index" + i);
                 all_cards[i].style.display = 'none';
            }
        }

    }// turn on
    //turn OFF pr
    else{
        console.log("prs only off");
        pr_button.innerHTML = "PRs Only";
        prs_only = 0;
        for (let i = 0; i < all_cards.length; i++) {
            all_cards[i].style.display = '';
        }
    } //turn off

}

function update_select(select){
    recent_btn.classList.remove("chosen");
    time_btn.classList.remove("chosen");
    place_btn.classList.remove("chosen");
     select.classList.toggle("chosen");
}