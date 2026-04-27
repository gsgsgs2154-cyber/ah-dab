function openPopup(id) {
    document.getElementById(id).style.display = "flex";
    document.getElementById("main").style.display = "none";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("main").style.display = "block";
}

window.onclick = function(e) {
    document.querySelectorAll(".popup").forEach(popup => {
        if (e.target === popup) {
            popup.style.display = "none";
            document.getElementById("main").style.display = "block";
        }
    });
};

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
        document.getElementById("main").style.display = "block";
    }
});

function toggleMode() {
    document.body.classList.toggle("light-mode");
}

const btn = document.createElement("button");
btn.innerText = "⬆";
btn.id = "topBtn";
document.body.appendChild(btn);

window.onscroll = function() {
    btn.style.display = window.scrollY > 200 ? "block" : "none";
};

btn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};