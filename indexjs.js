// 1 Html file with 4 pages 
// it's easy and simple 
// 29 / 4 / 2022 , i will update when i finish beginner level 


let homepage = document.getElementById("home_page");
let downloadpage = document.getElementById("download_page");
let toolpage = document.getElementById("tool_page");
let aboutpage = document.getElementById("about_page");

downloadpage.style.display = "none";
toolpage.style.display = "none";
aboutpage.style.display = "none";

function download_p() {
  homepage.style.display = "none";
  downloadpage.style.display = "block";
  toolpage.style.display = "none";
  aboutpage.style.display = "none";
}

function home_p() {
  homepage.style.display = "block";
  downloadpage.style.display = "none";
  toolpage.style.display = "none";
  aboutpage.style.display = "none";
}

function tool_p() {
  homepage.style.display = "none";
  downloadpage.style.display = "none";
  toolpage.style.display = "block";
  aboutpage.style.display = "none";
}

function about_p() {
  homepage.style.display = "none";
  downloadpage.style.display = "none";
  toolpage.style.display = "none";
  aboutpage.style.display = "block";
}
