function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to apply saved preferences
function applyPreferences() {
    var savedFontSize = getCookie("fontSize");
    var savedFontColor = getCookie("fontColor");

    if (savedFontSize) {
        document.body.style.fontSize = savedFontSize;
        document.getElementById("fontSize").value = savedFontSize;
    }
    if (savedFontColor) {
        document.body.style.color = savedFontColor;
        document.getElementById("fontColor").value = savedFontColor;
    }
}

// Function to save preferences
function savePreferences() {
    var fontSize = document.getElementById("fontSize").value;
    var fontColor = document.getElementById("fontColor").value;

    setCookie("fontSize", fontSize, 30); // Save for 30 days
    setCookie("fontColor", fontColor, 30); // Save for 30 days

    applyPreferences(); // Apply the preferences immediately
}

// Apply preferences on page load
window.onload = applyPreferences;