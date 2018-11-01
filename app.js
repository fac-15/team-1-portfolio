/* document.querySelector(".hello").scrollIntoView({
  behavior: "smooth"
}); */

let navAbout = document.getElementsByTagName("a")[1];
let navTeam = document.getElementsByTagName("a")[2];
let navContact = document.getElementsByTagName("a")[3];

navAbout.addEventListener("click", function() {
  console.log("the damn click function works!");
  console.log(navAbout.getAttribute("href"));
  document.querySelector(navAbout.getAttribute("href")).scrollIntoView({
    behavior: "smooth"
  });
});
