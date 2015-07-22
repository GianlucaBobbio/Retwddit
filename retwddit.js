// Checking page title
if (document.title.indexOf("Twitter") != -1) {
    main();
}

function main() {
    var index;
    var tweets = $(".tweet");
    for (index = 0; index < tweets.length; ++index) {
        var tweet = tweets[index];
        addRedditButton(tweet);
    }

    $(document).on("DOMNodeInserted", ".tweet", addDinamicallyRedditButton);
}

function addDinamicallyRedditButton() {
    var tweet = $(this).get(0);
    addRedditButton(tweet);
}

function addRedditButton(argTweet) {
    var tweet = argTweet;
    if (tweet.getElementsByClassName("button-retwddit").length < 1) {
        var fullname = tweet.getElementsByClassName("fullname")[0];
        var tweetText = tweet.getElementsByClassName("tweet-text")[0];
        var url = tweet.getElementsByClassName("js-permalink")[0];
        if (fullname && tweetText && url) {
            var btn = document.createElement("DIV");
            btn.className = "button-retwddit";
            btn.fullname = "[" + fullname.innerText + "]";
            btn.tweetText = tweetText.innerText;
            btn.text = btn.fullname + " " + btn.tweetText;
            btn.url = url.href;
            btn.onclick = copyToClipboard;
            tweet.getElementsByClassName("ProfileTweet-actionList")[0].appendChild(btn);
        }
    }
}

function copyToClipboard(event) {
    var text = event.target.text;
    var url = event.target.url;
    window.prompt("Copy to the title and url", text + " " + url);
}