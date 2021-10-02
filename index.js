const barBtn = document.querySelector(".fa-bars");
const mobileNav = document.querySelector(".mobile__nav--menu")


barBtn.addEventListener("click", ()=>{
  mobileNav.classList.toggle("show");
  barBtn.classList.toggle("fa-times")
})



function findOutlier(integers){
  integers.forEach(element => {
    if(element % 2 === 0 || element% 2 !==0) {
      console.log(element);
    }
  })
}

findOutlier([160, 3, 1719, 19, 11, 13, -21])

