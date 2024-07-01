var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

//Add event listener to the document object for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  // Selects element with class typeDel
  var typeDel = document.querySelector(".typeDel");
  // Text to be animated
  var textToAnimate = "Web Developer and Technical Writer";
  // Keeps track of the current index of the text
  var index = 0,
    // Indicates whether the text is being added or deleted
    isAdding = true;

  function Animate() {
    setTimeout(function () {
      // Sets element text based on current index.
      typeDel.innerText = textToAnimate.slice(0, index);
      if (isAdding) {
        // Checks if the index exceeds the length of the text
        if (index > textToAnimate.length) {
          // Updates the flag to indicate that text is being deleted
          isAdding = false;
          setTimeout(function () {
            // Calls the Animate function after a delay of 2 seconds
            Animate();
          }, 2000);
          // Exits the current iteration of the function
          return;
        } else {
          // Increments the index to move to the next character
          index++;
        }
      } else {
        // Checks if the index has reached 0. All text has been deleted
        if (index === 0) {
          // Updates the flag to indicate that text is being added
          isAdding = true;
        } else {
          // Decrements the index to move back to the previous character
          index--;
        }
      }
      // Calls the Animate function recursively
      Animate();
      // Sets the delay between each iteration of the function to 0.12 seconds
    }, 120);
  }
  // Calls the Animate function to start the animation
  Animate();
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");

  hamburgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  });
});
