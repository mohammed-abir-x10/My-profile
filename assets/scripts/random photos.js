const imagecontainerEl = document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", ()=>{
    imageNum = 10;
    addNewImage();
})

function addNewImage(){
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imagecontainerEl.appendChild(newImgEl);  
     }
    
}