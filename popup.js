document.getElementById('hookform').addEventListener('submit', listenForPizza, false);

function listenForPizza(evt) {
    evt.preventDefault();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { endpoint: evt.target[0].value}, function(response){});
    });
}
