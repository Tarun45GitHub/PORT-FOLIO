let toggel_btn=document.querySelector(".toggel_btn")
let ul=document.querySelector("ul");
toggel_btn.addEventListener("click",()=>{
    ul.classList.toggle("showData")
    // console.log(ul);
})