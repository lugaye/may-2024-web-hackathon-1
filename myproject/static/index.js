const portfolioButtons = document.querySelectorAll('.portfolio-details button');
const portfolioMoreDetails = document.querySelectorAll('.view-details');  

function displayPortfolio (index) {
   if (portfolioMoreDetails[index].style.display === 'block') {
        portfolioMoreDetails[index].style.display = 'none';
   } else {
        portfolioMoreDetails[index].style.display = 'block'
   }
}

for (let i = 0; i < portfolioButtons.length; i++) {
    portfolioButtons[i].addEventListener('click', (function() {
       displayPortfolio(i);
     }));
}


const technicalSkillsHeadingElement = document.querySelector('#technical-skills');
const nonTechnicalSkillsHeadingElement = document.querySelector('#non-technical-skills'); 

const technicalSkillsListElement = document.querySelector('#list-1');
const nonTechnicalSkillsListElement = document.querySelector('#list-2'); 

function displayList(element) {
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

technicalSkillsHeadingElement.addEventListener('click', function() {
    displayList(technicalSkillsListElement);
});

nonTechnicalSkillsHeadingElement.addEventListener('click', function() {
    displayList(nonTechnicalSkillsListElement);
});

