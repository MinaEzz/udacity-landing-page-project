/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// function to create section :
const main = document.querySelector("main");
let idNum = 0;

function createSection() {
  idNum++;
  // here gonna use ES6
  let section = `<section id="section${idNum}" data-nav="Section${idNum}">
    <div class="landing__container">
      <h2>Section ${idNum}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
  
      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
  </section>`;
  return (main.innerHTML += section);
}
// calling the function 4 times to make 4 sections inside main
createSection();
createSection();
createSection();
createSection();
createSection();

// function to add list item inside navbar list :
const navBarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  // we need function that create li item for each section :
  function createListitem() {
    const listItem = `<li><a href="#${
      section.id
    }" class="menu__link ">Section ${i + 1}</a></li>`;
    navBarList.innerHTML += listItem;
  }
  createListitem();
}

// add "active-link" class to the active navbar link :
listItems = navBarList.querySelectorAll("li");
listItems.forEach((item) => {
  item.addEventListener("click", function () {
    listItems.forEach((item) => {
      item.classList.remove("active-link");
    });
    item.classList.add("active-link");
  });
});

//activate the section on scroll :
// function to remove active class:
const removeActive = function (section) {
  section.classList.remove("your-active-class");
};
//function to add active class:
const addActive = function (section) {
  section.classList.add("your-active-class");
};
// the activation function :
const SectionActivation = function () {
  sections.forEach((section) => {
    let elementOffset = section.getBoundingClientRect(); //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    //https://www.youtube.com/watch?v=MKpZadkuT-0
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addActive(section);
    } else {
      removeActive(section);
    }
  });
};
window.onscroll = SectionActivation;
