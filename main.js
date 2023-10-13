const addButton = document.querySelector("#add-btn"); //selects the add ticket-button
const textInput = document.querySelector("#text"); //selects the input from the textbox
const ticket = document.querySelector(".ticket"); //selects the first ticket in the ticket class ->should be a select all, make array and look for id. Perhaps.
const ticketContainer = document.querySelector(".ticket-container"); //select the container div (to add new ticket)
const header = document.querySelector("header");

console.log(ticketContainer);

console.log(ticketContainer.innerHTML);

console.log(textInput);

console.log(textInput.value);

var counter = 7;

addButton.addEventListener("click", createTicket);

function createTicket()
{
    //TODO*  Formating the ticket and ticket number
    //console.log("button clicked"); //shows that the eventListner works
    counter += 1;
    var newTicket = document.createElement(`div`);
    newTicket.className = "ticket";
    newTicket.id = counter;
    //console.log(newTicket); //shows that the addElement and class works
    ticketContainer.appendChild(newTicket);
    //console.log(ticketContainer); //shows that the newTicket is added to the container div
    var newToDo = textInput.value;
    console.log(newTicket.innerHTML);
    newTicket.innerHTML = `<p>${newToDo} Ticket number:${counter}</p>
    <div>
          <input type="checkbox" id="check${counter}" />
          <label id="label${counter}" for="check${counter}">Done!</label><br />
        </div>`;
    console.log(newTicket.innerHTML); //shows ticket text
    //console.log(newTicket); //shows the input in the new ticket element
    textInput.value = ""; //clears the input box
};

const checkbox = document.querySelector("#done"); // Ska vara en select all med array etc för att hitta rätt checkbox.

checkbox.addEventListener(("change"), e => {
    //TODO: Make the eventlistner listen to the checkbox
    // Make a way to know which tickets checkbox (index? id?)
    // run the ticketDone() function
    console.log("e: ", e)
    if(e.target.checked){
        console.log(parentElement.id); //Här har jag fastnat.
        ticketDone();
    } else {
        console.log("REVERSE logic")
    }
});
/*
// Select all checkboxes with the name 'settings' using querySelectorAll.
var checkboxes = document.querySelectorAll("input[type=checkbox][name=settings]");
let enabledSettings = []

/*
For IE11 support, replace arrow functions with normal functions and
use a polyfill for Array.forEach:
https://vanillajstoolkit.com/polyfills/arrayforeach/
*/
/*
// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    enabledSettings = 
      Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
      
    console.log(enabledSettings)
  })
});
*/


function ticketDone() 
{
    //TODO* 
    //1: checkbox on ticket
    //2: eventListner for checkbox
    //3: function to run on eventListner (this one) to add class .done to ticket
    //4: class .done in css should change colour and position (end) of ticket
    var doneTicket = document.getElementById(`#${ticketId}`)  

};

//TODO: Ändra texten i add ticket - antingen så den blir fet, annan färg, upper case osv när det finns text i input-rutan 

//e.target.classList.contains("remove-btn")
//if, remove parentElement.remove();