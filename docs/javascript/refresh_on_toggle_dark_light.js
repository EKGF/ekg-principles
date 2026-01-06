(function() {
    const paletteSwitcher0 = document.getElementById("__palette_0");
    const paletteSwitcher1 = document.getElementById("__palette_1");

    if (paletteSwitcher0) {
        paletteSwitcher0.addEventListener("change", function () {
            setTimeout(function() {
                location.reload();
            }, 100);
        });
    }

    if (paletteSwitcher1) {
        paletteSwitcher1.addEventListener("change", function () {
            setTimeout(function() {
                location.reload();
            }, 100);
        });
    }
})();
