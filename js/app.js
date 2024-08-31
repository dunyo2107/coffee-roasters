document.getElementById("toggle-button").addEventListener("click", function() {
    var moreText = document.getElementById("more-text");
    var buttonText = document.getElementById("toggle-button");

    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        // buttonText.textContent = "^";
    } else {
        moreText.classList.add("hidden");
        // buttonText.textContent = "^";
    }
});