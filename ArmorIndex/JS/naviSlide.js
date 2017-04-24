
//grab elements from the DOM
var naviButton = document.getElementById("naviButton");
var mainMenu = document.getElementById("mainMenu");
var exitMainMenu = document.getElementById("exitMainMenu");
var electric = document.getElementById("electricIcon");
var hp = document.getElementById("hpIcon");
var weight = document.getElementById("weightIcon");
var radioactive = document.getElementById("radioactiveIcon");
var damage = document.getElementById("damageIcon");

var iconContainer = [electric, hp, weight, radioactive, damage, naviButton, mainMenu];
naviButton.addEventListener("click", showMenu, false);
exitMainMenu.addEventListener("click", hideMenu, false);

function showMenu(e)
{
  for(i = 0; i < iconContainer.length; i++)
  {
    iconContainer[i].classList.add("show");
  }
  displayUIinformation();
  displayUINumbers();
  document.body.style.overflow = "hidden";
}
function hideMenu(e)
{
  for(i = 0; i < iconContainer.length; i++)
  {
    iconContainer[i].classList.remove("show");
  }
  clearAllIntervals();
  document.body.style.overflow = "auto";
}

if (window.matchMedia("(max-width: 450px)").matches)
{
  console.log("Your on a mobile device!");
  showMenu();
}
else
{
  console.log("You are not on a mobile device!");
}
