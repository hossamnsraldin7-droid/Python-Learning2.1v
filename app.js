const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.onclick = () => {
sidebar.style.left = "0";
overlay.style.opacity = "1";
overlay.style.visibility = "visible";
};

overlay.onclick = () => {
sidebar.style.left = "-250px";
overlay.style.opacity = "0";
overlay.style.visibility = "hidden";
};
