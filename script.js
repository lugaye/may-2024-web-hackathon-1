var tab_links = document.getElementsByClassName("tab-links");
var tab_contents=document.getElementsByClassName("tab-contents");


function openTab(tab_name) {
    for(tab_link of tab_links) {
        tab_link.classList.remove("active-link");
    }

    for(tab_content of tab_contents) {
        tab_content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tab_name).classList.add("active-tab");
}

// Javascript for small screens

var side_menu=document.getElementById("side-menu");

function openMenu(){
    side_menu.style.right="0";
}

function closeMenu(){
    side_menu.style.right="-200px";
}

// Javascript for linking my portfolio with google spreadsheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbw_Q_ZPY7XhNhLgtV_HhiWUq5dsPqvKo4ZKEei4-Y5VABCxQN1Wf6hd1asV-2_cZDrpeA/exec'
const form = document.forms['submit-to-google-sheet']

const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Thank you for your message! I'll get back to you shortly."
        setTimeout(function(){
            msg.innerHTML=""
        }, 10000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
