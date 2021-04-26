// Get element with ID "container" from the page
let container = document.getElementById('container');

// Get every "td" from the page
let td = document.querySelectorAll("td")

// let table = document.getElementById("table"), 
//     tr = table.getElementsByTagName("tr"),
//     td = tr.getElementsByTagName("td");

// Create a cycle that prints the text inside every td of the page
let textTD = document.querySelectorAll("td")
textTD.innerText = "Changing the text"

// Write a function to change the heading of the page

function changeHeading() {
    let reference = document.getElementsByTagName("h1").innerText = "New text!";
}
// Write a function to add an extra row to the table

function addRow() {
    // Find a <table> element with id="myTable":
    let table = document.getElementById("myTable");
    // Create an empty <tr> element and add it to the 1st position of the table:
    let row = table.insertRow(0);
}
// Write a function to add the class "test" to each row in the table

for (let i = 0; i < tr.length; i++) {
    let text = tr[i].innerText;
    //check for your target text
    if (text === "classText") {
        //add your class to the element containing this text
        tr[i].classList.add("classText");
    }
}
// Write a function to add a red background to every link in the page
function changeBodyBg(color) {
    document.links.style.background = color;
}
// Console log "Page loaded" when the page is correctly loaded
window.onload = function () {
    console.log("Page loaded")
};
// Write a function to add new items to a UL

function createNewItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createNewItem('Home'));
menu.appendChild(createNewItem('Services'));
menu.appendChild(createNewItem('About Us'));
// Write a function to empty a list
function emptyList() {
    document.getElementById("Ul").innerHTML = "";
}

// or a specific element

function removeItem(item) {
    var itemToRemove = document.getElementById(item);
    itemToRemove.parentNode.removeChild(itemToRemove);
}