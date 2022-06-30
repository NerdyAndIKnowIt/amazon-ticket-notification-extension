//compare the new ticket value with the old ticket value, create a alert if the new value is larger
var firstload = 1;
var currentTicketCount = 0;

chrome.runtime.onMessage.addListener(function(newTicketCountString, sender, sendResponse){

    newTicketCountNumber = newTicketCountString.replace(/[)(]/g, '');
    newTicketCount = parseInt(newTicketCountNumber);

    if (firstload == 1) { //first time running, save the new ticket count as the current count
        currentTicketCount = newTicketCount;
        firstload = 0;
    }

    if (newTicketCount > currentTicketCount) {
        alert("There is a new ticket in the queue! The queue is at " + newTicketCount + " tickets.");
        currentTicketCount = newTicketCount;
    }
    else if (newTicketCount < currentTicketCount) {
        currentTicketCount = newTicketCount;
    }
    console.log("currentTicketCount " + currentTicketCount);
    
});