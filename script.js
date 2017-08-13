/**
********** MENU SLIDING ON SMALL SCREEN ***********
**/


var i;
function slideMenu(direction) {

  let navTable = document.getElementsByClassName('nav-link');

  var slideIn = function() {
    console.log(i,navTable[i]);
    if (i < navTable.length ) {
      navTable[i].classList.add("show-link");
      i++;
      setTimeout(slideIn, 50);
    } else {
      return false;
    }
  }

  var slideOut = function() {
    console.log(i,navTable[i]);
    if (i >= 0) {
      navTable[i].classList.remove("show-link");
      i--;
      setTimeout(slideOut, 50);
    } else {
      return false;
    }
  }

  switch (direction) {
    case 0:
      slideIn();
      break;
    case 4:
      slideOut();
      break;
  }

  return false;
}


function menuToggle(){
  var menu = document.getElementById('main-navigation');
  if (menu.classList.contains("show-menu")){
    i = 4;
    slideMenu(i);
    menu.classList.remove("show-menu");
  } else {
    i = 0;
    slideMenu(i);
    menu.classList.add("show-menu");
  }
}


var hamburger = document.getElementById('navigation-toggle');
hamburger.addEventListener('click', menuToggle );


/**
*********** MENU ITEM SLIDE TO SECTION ********
**/

var menuLink = document.querySelectorAll('.nav-link');

menuLink.prototype.
console.log(menuLink);

/*menuLink.addEventLgistener('click', function(e){
  alert(e.target.value);

   var elementsY = document.getElementById('services').offsetTop;
   var navbarHeight = document.getElementById('navigationBar').offsetHeight;
   var scrollAmount = elementsY - navbarHeight;
   setTimeout(function() {window.scrollTo(0, scrollAmount);},1)
});*/
