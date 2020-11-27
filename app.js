// api from dog server 
const apiLink = "https://dog.ceo/api/breeds/image/random";
// dom elements 
const photoDiv= document.getElementById("newphoto");
const newbtn= document.getElementById("newbtn");


 async function getRandomDog(){
   const response=  await fetch(apiLink);
   const json =  await response.json();
   const forDiv = json.message;
   photoDiv.innerHTML = `<div  id="newphoto" class="text-center mt-4 p-4 ">
   <img src="${forDiv}" class="img-fluid pho " alt="Responsive image">
 </div>`

}

function loading(){
    photoDiv.innerHTML=`<div class=" text-center">
    <div class="spinner-border text-danger " role="status">
        <span class="sr-only"></span>
      </div>
</div>` ;
}


newbtn.addEventListener("click", function(){
   getRandomDog()
   loading();
})



