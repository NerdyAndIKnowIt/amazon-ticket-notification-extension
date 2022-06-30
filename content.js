//Pull ticket count from DOM and sent to background.js every 5 minutes. If the DOM is not done loading wait 15 seconds and try again.

window.onload = timedRefresh(60000);

function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
    pullElement();
}

function pullElement() {
    setTimeout(pullElement, 15000);
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', pullElement);
    } 
    else {
        const TicketCountElement = document.getElementsByClassName("custom-action-stripe-counter");
        chrome.runtime.sendMessage(TicketCountElement[0].innerHTML);
    }
}

