// Checking page title
if (document.title.indexOf("Twitter") != -1) {
    addReddItBtns();

    document.getElementsByClassName("js-new-items-bar-container")[0].addEventListener("click", addReddItBtns, false); // standard + firefox
}

function addReddItBtns(){
    var index;
    var tweets = document.getElementById("stream-items-id").getElementsByClassName("stream-item");
    for (index = 0; index < tweets.length; ++index) {

        var tweet = tweets[index];
        var fullname = tweet.getElementsByClassName("fullname")[0].innerText;
        var tweetText = tweet.getElementsByClassName("tweet-text")[0].innerText;
        var url = tweet.getElementsByClassName("js-permalink")[0].href;

        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("R");
        btn.className = "button-reddIt";
        btn.appendChild(t);
        btn.type = "button";
        btn.fullname = "[" + fullname + "]";
        btn.tweetText = tweetText;
        btn.text = btn.fullname + " " + btn.tweetText;
        btn.url = url;
        btn.onclick = copyToClipboard;
        tweet.getElementsByClassName("time")[0].appendChild(btn);
    }
}

function copyToClipboard(event) {
	var text = event.target.text;
	var url = event.target.url;
	window.prompt("Copy to the Title", text);
	window.prompt("Copy to the Url", url);
}