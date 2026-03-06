// hada yekteb "pexilio dashboard" f console
console.log("pexilio dashboard");

// hada back yemchi darkmode
const darkButton = document.querySelector(".dark-mode")

darkButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

// hada yahkem element li clckit 3lih f sidebar w yeketbo f console 
const menuBoxes = document.querySelectorAll(".left-panel .box");

menuBoxes.forEach(function(box){
    box.addEventListener("click", function(){
        console.log(box.innerText + " clicked");
    });
});

// hada yekteb "selected" 3la carre li klikit 3lih "hadok li mektob fihom Empty"
const emptyBoxes = document.querySelectorAll(".empty-box");

emptyBoxes.forEach(function(box){
    box.addEventListener("click", function(){
        box.innerText = "Selected";
    })
})



// console tsibha ki tekliki b la droite b la sourie w teckliqi 3la "inspect"
// omba3d kheyer "console"