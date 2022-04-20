const contenxbx = document.querySelectorAll(".contentbx");

contenxbx.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.classList.toggle("active");
    })
})