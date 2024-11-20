document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll(".key");
    const inputField = document.getElementById("input-field");

    keys.forEach(key => {
        key.addEventListener("click", () => {
            const keyValue = key.textContent.trim();

            if (keyValue === "Enter") {
                inputField.value += "\n";
            } else if (keyValue === "Backspace") {
                inputField.value = inputField.value.slice(0, -1);
            } else {
                inputField.value += keyValue;
            }
        });
    });
});
