(function() {
    const paletteSwitcher1 = document.getElementById("__palette_1");
    const paletteSwitcher2 = document.getElementById("__palette_2");

    if (paletteSwitcher1) {
        paletteSwitcher1.addEventListener("change", function () {
            location.reload();
        });
    }

    if (paletteSwitcher2) {
        paletteSwitcher2.addEventListener("change", function () {
            location.reload();
        });
    }
})();
