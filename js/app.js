document.querySelectorAll(".toggle-button").forEach(function(button) {
    button.addEventListener("click", function() {
        var moreText = this.parentElement.nextElementSibling;
        
        if (moreText.classList.contains("hidden")) {
            moreText.classList.remove("hidden");
        } else {
            moreText.classList.add("hidden");
        }
    });
});
