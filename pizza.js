function notify(state, endpoint) {
  var params = "payload="+encodeURIComponent(JSON.stringify({
      text: state,
      username: "Dominos",
      icon_emoji: ":pizza:",
  }));

  var n = new XMLHttpRequest();
  n.open("POST", endpoint);
  n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  n.send(params);
}

function doThis(endpoint) {
  var prevState = null;

  setInterval(function () {
    var state = document.getElementsByClassName("leftStatus")[0].innerHTML
    if (state != prevState) {
      prevState = state;
      notify(state, endpoint);
    }
  }, 1000);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        notify("Pizza has been ordered", request.endpoint)
        doThis(request.endpoint);
    }
);
