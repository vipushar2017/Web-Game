 var randomenumber1 = Math.floor(Math.random() * 3) + 1;
 var selectimage = "images" + "\\" + randomenumber1 + ".png";
 document.getElementsByTagName("img")[0].setAttribute("src", selectimage);

 var randomenumber2 = Math.floor(Math.random() * 3) + 1;
 var selectimage = "images" + "\\" + randomenumber2 + ".png";
 document.getElementsByTagName("img")[1].setAttribute("src", selectimage);

 document.querySelector("a").addEventListener("click", winner);
 function winner(){
   alert("I got clicked");
   document.getElementById("games-title-h3").textContent="Draw!!!";

 }


 var com=0;
 var play=0;
 function winner(){
   if (randomenumber1 === 2 && randomenumber2 === 1)
     document.getElementById("games-title-h3").innerHTML = "OOPS!!!";
     //com=com+1;
    else if (randomenumber1 === 2 && randomenumber2 === 3)
     document.getElementById("games-title-h3").innerHTML = "CONGO!!!";
     //play=play+1;
    else if (randomenumber1 === 1 && randomenumber2 === 2)
     document.getElementById("games-title-h3").innerHTML = "CONGO!!!";
     //play=play+1;
   else if (randomenumber1 === 1 && randomenumber2 === 3)
     document.getElementById("games-title-h3").innerHTML = "OOPS!!!";
     //com=com+1;
   else if (randomenumber1 === 3 && randomenumber2 === 2)
     document.getElementById("games-title-h3").innerHTML = "OOPS!!!";
     //com=com+1;
   else if (randomenumber1 === 3 && randomenumber2 === 1)
     document.getElementById("games-title-h3").innerHTML = "CONGO!!!";
     //play=play+1;
   else
     document.getElementById("games-title-h3").innerHTML = "Draw!!!";
 
 }
