// home page
let heading_home="Fresh Friends"
let h=0;
function typeHomeText(){
    if(h<heading_home.length){
        document.getElementById("logo").innerText +=heading_home.charAt(h)
        h++
    }
    setTimeout(typeHomeText,100)

}
window.onload=typeHomeText



// about page
let btn_learnmore = document.getElementById("btn_learnmore");
let back_btn = document.getElementById("back_btn");
let output = document.getElementById("output");

btn_learnmore.addEventListener("click", () => {
    output.style.display = "block";
    back_btn.style.display = "inline-block";
    btn_learnmore.style.display = "none"; 
});

back_btn.addEventListener("click", () => {
    output.style.display = "none";
    back_btn.style.display = "none";
    btn_learnmore.style.display = "inline-block"; 
});
// heading
let heading_about="About Fresh Finds"
let i=0;
function typetext(){
    if(i< heading_about.length){
        document.getElementById("heading"). innerText  += heading_about.charAt( i )
        i++
       
        setTimeout(typetext,100)
    }

}
window.onload=typetext
// product
function addToCart() {
  const size = document.getElementById("size").value;
  const qty = document.getElementById("qty").value;

  if (size === "Choose Size") {
    alert("Please select a shoe size.");
    return;
  }

  alert(`Added ${qty} pair(s) of Stylish Sneakers (Size: ${size}) to your cart!`);
}

// service

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});
// contact
document.addEventListener("DOMContentLoaded",function(){
  let name=document.getElementById("name")
  let email=document.getElementById("email")
  
})




