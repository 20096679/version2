/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Hello from the tango project!");

const bluebtn = document.querySelector(".blue");

bluebtn &&
  bluebtn.addEventListener("click", () => alert("Thank you for your appreciation!"));

const yellowbtn = document.querySelector(".yellow");

yellowbtn &&
  yellowbtn.addEventListener("click", () => {
    let infoDiv = document.querySelector("#info");
    infoDiv.style.color = "darkgreen";
    if (infoDiv.style.display === "block") {
      infoDiv.style.display = "none";
    } else {
      infoDiv.style.display = "block";
    }
  });

const orangebtn = document.querySelector(".orange");

const introductionDiv = document.querySelector("#introduction");

orangebtn &&
  orangebtn.addEventListener("click", () => {
    let intro = prompt("What's your name tanguero?");
    introductionDiv.style.color = "darkgreen";
    introductionDiv.style.display = "block";
    document.querySelector("#introduction").innerHTML = `<p> Hello, ${intro}, 
    I can't wait to hearing your tango playlists! Click this message to close it.</p>`;
    introductionDiv.style.cursor = "pointer";
  });

introductionDiv &&
  introductionDiv.addEventListener("click", (evt) => {
   // evt.currentTarget.style.display = "none";
    introductionDiv.style.display = "none";
  });

const ratebtn  = document.querySelector("#rateit");

ratebtn &&
  ratebtn.addEventListener("click", () => {
   let userRating = parseInt(prompt("Rate this Tango Collection (from 1 to 5 stars)"));
  if (userRating>5 || userRating<1 || isNaN(userRating)){
    alert("Oops, try again with a number between 1 and 5!");
  }
  else{

    document.querySelector("#rating").innerHTML = "You gave a rating of: ";
    for (let i=0; i < userRating; i++){
        document.querySelector("#rating").innerHTML +="<i class='yellow star icon'></i>";
    }
  }
});

$(".delmelody").click(() => confirm('Really delete this tango?'))

$(".deltanda").click(() => confirm('Really delete this tango playlist?'))
