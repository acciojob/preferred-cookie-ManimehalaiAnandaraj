function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

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

        function applyPreferences() {
            var savedFontSize = getCookie("fontSize");
            var savedFontColor = getCookie("fontColor");

            if (savedFontSize) {
                document.body.style.fontSize = savedFontSize + "px"; // Ensure units are included
                document.getElementById("fontsize").value = savedFontSize;
            }
            if (savedFontColor) {
                document.body.style.color = savedFontColor;
                document.getElementById("fontcolor").value = savedFontColor;
            }
        }

        function savePreferences(event) {
            event.preventDefault(); // Prevent the form from submitting
            var fontSize = document.getElementById("fontsize").value;
            var fontColor = document.getElementById("fontcolor").value;

            setCookie("fontSize", fontSize, 30); // Save for 30 days
            setCookie("fontColor", fontColor, 30); // Save for 30 days

            applyPreferences(); // Apply the preferences immediately
        }

        // Apply preferences on page load
        window.onload = applyPreferences;