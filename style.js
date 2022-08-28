

const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")
const open = document.querySelector(".open")

  
  open.addEventListener("click", ()=>{
        hamburger.style.display="block"
        close.style.display= "block"
        open.style.display = "none"
        
  })
   close.addEventListener("click", ()=>{
        hamburger.style.display="none"
        close.style.display= "none"
        open.style.display = "block"
        if(hamburger.state ==="blur"){
            hamburger.style.display="none"
        close.style.display= "none"
        open.style.display = "block"  
        }
  })


//         // DESTINATION NAV

    
const moon =  document.getElementById("moon");
const mars = document.getElementById("mars");
const titan = document.getElementById("titan");
const europa =document.getElementById("europa");
const moonText = document.getElementById("moonText");
const marsText = document.getElementById("marsText");
const europaText = document.getElementById("europaText");
const titanText =document.getElementById("titanText")

//   THE IMAGE

 const imgMars=document.querySelector(".imgMars")
 const imgMoon=document.querySelector(".imgMoon")
 const imgEuropa=document.querySelector(".imgEuropa")
 const imgTitan=document.querySelector(".imgTitan")
 const page = document.getElementById("destination")



      
      //     MOON SHOW

        moon.addEventListener("click", 
         function showMoon () {
             moonText.style.display="block";
             marsText.style.display="none";
             europaText.style.display="none";
             titanText.style.display="none";
             imgMars.style.display="none";
             imgEuropa.style.display="none";
             imgTitan.style.display="none";
             imgMoon.style.display="block";
         })

 
      //     MARS SHOW
         mars.addEventListener("click", 
           function showMars (){
             moonText.style.display="none";
             marsText.style.display="block";
             europaText.style.display="none";
             titanText.style.display="none";
             imgMars.style.display="block";
             imgEuropa.style.display="none";
             imgTitan.style.display="none";
             imgMoon.style.display="none";
         })

      // //     EUROPA SHOW
         europa.addEventListener("click", 
          function showEuropa()  {
             moonText.style.display="none";
             marsText.style.display="none";
             europaText.style.display="block";
             titanText.style.display="none";
             imgMars.style.display="none";
             imgEuropa.style.display="block";
             imgTitan.style.display="none";
             imgMoon.style.display="none";
         })

      //   // TITAN SHOW
       titan.addEventListener("click", 
         function showTitan() {
            moonText.style.display="none";
            marsText.style.display="none";
            europaText.style.display="none";
            titanText.style.display="block";
            imgMars.style.display="none";
            imgEuropa.style.display="none";
            imgTitan.style.display="block";
            imgMoon.style.display="none";
        })    